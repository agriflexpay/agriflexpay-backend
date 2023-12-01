import jwt from "jsonwebtoken";
import UserService from "../user/user.service";
import ResponseService from "../../funct/responce";
import { Response } from "express";
import { verifyToken } from "../../utils/jwt.utls";
import { get } from "lodash";
import logger from "../../funct/logger";
import {User_type} from "../../types/type"

interface UserInterface extends User_type { }
const privateKey =process.env.PRIVATE_KEY
const publicKey =process.env.PUBLIC_KEY  

export default class TokenService {
    static async decode(token: string) {
        try {
            const decoded = jwt.verify(token, publicKey);

            return decoded;
        } catch (error) {
            logger.error(error);
            return null
        }
    }

    static async sign(data: Object,) {
        try {

            const authToken = jwt.sign(
                { data },
                privateKey,
                {
                    algorithm: "RS256",
                    expiresIn: process.env.TokenExpiresIn
                }

            );



            const refreshToken = jwt.sign(
                { data },
                privateKey,
                {
                    algorithm: "RS256",
                    expiresIn: process.env.REFRESH_TOKEN_ExpiresIn
                }

            );

            return {
                authToken,
                refreshToken
            }
        } catch (error) {
            logger.error(error);
            return null
        }
    }

    static async verifyToken(token: string) {
        try {
            //Decode token
            let _decoded: any;
            _decoded = await this.decode(token);

            if (!_decoded) {
                return false;
            }



            const user = await UserService.fetch({ id: _decoded?.id })

            if (!user) {
                logger.error("User not found");
                return false;
            }


        } catch (error) {
            logger.error(error);
            return null
        }
    }


    static async generateToken({ user, res, }: { user: UserInterface, res: Response,  }) {
        try {
            const { fname, lname, email, id, is_active } = user;
            const token = await this.sign(
                {
                    fname,
                    lname,
                    email,
                    id,
                    is_active,
                    
                }
            );


            if (!Object.keys(token ?? {})?.length) {
                return ResponseService.error({ res, error: "Failed to generate token" });
            }

            return ResponseService.success({
                res,
                data: { user, ...(token ?? {}) }
            });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }
    static async reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
        const { decoded, expired }: { decoded: any, expired: boolean } = await verifyToken(refreshToken);

        if (!decoded || !get(decoded, "id") || expired) return false;



        const user = await UserService.fetch({ id: decoded?.id })
        if (!user) return false;

        const accessToken = await this.sign(user);

        return accessToken;
    }
}