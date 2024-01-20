
import { omit } from "lodash";
import {User_type} from "../../types/type"
import sequelize_instance from "../../models/index";
import { comparePassword } from "../../funct/password";
import log from "../../funct/logger";
import  {generateUUID} from "../../funct/generateId"
import {hashPassword} from "../../funct/password";
const User = sequelize_instance.models.User;
interface UserInterface extends User_type { }
class UserService {
    static async create({ ...user }: UserInterface) {
      try{
        const tohashpassword = user?.password||''
        const data =
        {
            ...user,
            id:generateUUID(),
            password:await hashPassword({password:tohashpassword})
        }
        log.info(sequelize_instance.models);
        const _user = await User.create(data);

        const _data = {..._user.dataValues}
        return omit(_data,"password","reset_token", "reset_token_expires","verification_token","verification_token_expires");
      }
        catch(error){
            return error;
        }
    }

    static async update({ id, ...user }: UserInterface) {
        try{
            const _user = await User.update(
               user,
                {
                    where: {
                        id: id
                    }
                }
            );
    
            return _user;
        }catch(error){
            return error;
        }
    }

    static async fetch({ id }: UserInterface) {
        const _user = await User.findByPk(
            id,
            {
                attributes: {
                    exclude:  filter
                },
                include: [
                    {
                        association: "Address"
                    }
                ]
            }
        )
        const _data = {..._user?.dataValues}
        return omit(_data,"password","reset_token", "reset_token_expires","verification_token","verification_token_expires")
    }

    static async users() {
       try{
        const _users = await User.findAll(
               {
                    attributes: {
                        exclude:  filter
                    },
                    include: [
                        {
                            association: "Address"
                        }
                    ]  
                },
                     
        );
        return _users?.map((user) =>user.dataValues )
       }catch(error){
           return error;
       }
    }

    static async filter({ ...query }: UserInterface) {
        const condition = { ...query };

        const _users = await User.findAll({
            where: condition,
        })
        const users = _users.map((user) => {
            const _users = { ...user.dataValues }
            return omit(_users,"password","reset_token", "reset_token_expires","verification_token","verification_token_expires");
        }
        )
        return users;
    }

    static async delete({ id }: UserInterface) {
        const _user = await User.destroy(
            {
                where: { id: id },
                truncate: false
            }
        );

        return _user;
    }

    static async validate_password({ email, password }: { email: string, password: string }) {
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return false;
        }
        const hashedPassword: string = user.dataValues?.password;
        const is_valid = await comparePassword({
            password,
            hashedPassword
        });

        if (!is_valid) return false;
        const _user = {...user.dataValues}

        return omit(_user,"password","reset_token", "reset_token_expires","verification_token","verification_token_expires");
    }

    static async avatar({url,id }: {url: string,id:string }) {
       const user_image = User.update({
            avatar:url
        },
            {
                where: {
                    id: url
                }
            }
        )
        return user_image;
    }
}
const filter = ["password",
    "created_at",
    "updated_at",
    "reset_password_token",
    "reset_password_expires",
    "reset_token",
    "reset_token_expires",
    "is_account_verified",
    "verification_token",
    "verification_token_expires"
]

export default UserService;