
import { omit } from "lodash";
import {User} from "../../types/type"
import sequelize_instance from "../../models/index";
import { comparePassword } from "../../funct/password";
const User = sequelize_instance.models.user;
interface UserInterface extends User { }
class UserService {
    static async create({ ...user }: UserInterface) {
        const _user = await User.create(user);
        return omit(_user.toJSON(), "password");
    }

    static async update({ id, ...user }: UserInterface) {
        const _user = await User.update(
            user,
            {
                where: {
                    id: id
                }
            }
        );

        return _user;
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