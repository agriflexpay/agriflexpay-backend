import { hashResetToken } from "../../funct/reset_password";
import crypto from "crypto";
import TokenService from "../token";
import  sequelize_instance from '../../models/index'

const User = sequelize_instance.models.user;
export class Password_reset{

    static async resetPassword({ email }: { email: string }) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            return false;
        }
        const token = user?.dataValues?.reset_token;
        if(token){
            User.update(
                { reset_token: null },
                { where: { email: email } }
            
            )
        }
        const new_resetToken = crypto.randomBytes(32).toString("hex");
        const set_token = await User.update(
            { reset_token: hashResetToken({ token: new_resetToken }),
              reset_token_expires: Date.now() + 10 * 60 * 1000
        },
            { where: { email: email } }
        
        )
        if(!set_token){
            return false;
        }
        const link = `http://localhost:3000/reset-password/${new_resetToken}`

        
        
        return link;
    }
}