
import { omit } from "lodash";
import {User_type} from "../../types/type"
import sequelize_instance from "../../models/index";
import { comparePassword } from "../../funct/password";

const User = sequelize_instance.models.user;
interface UserInterface extends User_type { }
class UserService {
    static async create({ ...user }: UserInterface) {
      try{
        const created_at = new Date();
        const updated_at = new Date();
        const data =
        {
            ...user,
            created_at,
            updated_at
        }
        console.log(data);
        const _user = await User.create(data);
        return omit(_user.toJSON(), "password");
      }
        catch(error){
            return false;
        }
    }

    static async update({ id, ...user }: UserInterface) {
        try{
            const updated_at = new Date()
            const data =
            {
                ...user,
                updated_at
            }
            const _user = await User.update(
                data,
                {
                    where: {
                        id: id
                    }
                }
            );
    
            return _user;
        }catch(error){
            return false;
        }
    }

    static async fetch({ id }: UserInterface) {
        const _user = await User.findByPk(id)
        return omit(_user?.toJSON(), "password")
    }

    static async users() {
        const users = await User.findAll();
        return omit(users, "password");
    }

    static async filter({ ...query }: UserInterface) {
        const condition = { ...query };

        const _users = await User.findAll({
            where: condition,
        });

        return _users;
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

        return omit(user.toJSON(), "password");
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

export default UserService;