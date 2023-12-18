import jwt from 'jsonwebtoken';
import config from '../config/default'
import TokenService from '../services/token';


const privateKey = config.privateKey
const publicKey = config.publicKey


export const singToken = async (payload: Object, options?: jwt.SignOptions | undefined) => {
    return jwt.sign(
        payload,
        privateKey,
        {
            ...(options && options),
            algorithm: "RS256"
        }
    );
}

export const verifyToken = async (token: string) => {
    try {
        const decoded: any = await TokenService.decode(token)

        return (
            {
                valid: true,
                expired: false,
                decoded
            }
        )
    } catch (e: any) {
        return (
            {
                valid: false,
                expired: e.message === "jwt expired",
                decoded: null
            }
        )
    }
}