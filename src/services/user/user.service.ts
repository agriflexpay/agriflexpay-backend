
import { omit } from "lodash";
import { User_type } from "../../types/type"
import sequelize_instance from "../../models/index";
import { comparePassword } from "../../funct/password";
import log from "../../funct/logger";
import { uploader } from "../../funct/uploader";    
import { generateUUID } from "../../funct/generateId"
import { hashPassword } from "../../funct/password";
const User = sequelize_instance.models.User;
const Agent = sequelize_instance.models.Agent;
const Famers = sequelize_instance.models.Famer;
const Vet_doctor = sequelize_instance.models.Vet_doctor;
const Guaranter = sequelize_instance.models.Guaranter;
interface UserInterface extends User_type { }
class UserService {
    static async create({ ...user }: UserInterface) {
        try {
            const tohashpassword = user?.password || ''
            const data =
            {
                ...user,
                id: generateUUID(),
                password: await hashPassword({ password: tohashpassword })
            }
            const _user = await User.create(data);

            const _data = { ..._user.dataValues }
            return omit(_data, "password", "reset_token", "reset_token_expires", "verification_token", "verification_token_expires");
        }
        catch (error) {
            return error;
        }
    }

    static async update({ id, ...user }: UserInterface) {
        try {
            const _user = await User.update(
                user,
                {
                    where: {
                        id: id
                    }
                }
            );

            return _user;
        } catch (error) {
            return error;
        }
    }

    static async fetch({ id }: UserInterface) {
        const _user = await User.findByPk(
            id,
            {
                attributes: {
                    exclude: filter
                },
                include: [
                    {
                        association: "Address"
                    }
                ]
            }
        )
        const _data = { ..._user?.dataValues }
        return _user
    }

    static async users({agency_uuid}:{agency_uuid:string}) {
        try {
            const _users = await User.findAll(
                {
                    where:{
                        agency_uuid
                    },
                    attributes: {
                        exclude: filter
                    },
                    include: [
                        {
                            association: "Address"
                        }
                    ]
                },

            );
            return _users?.map((user) => user.dataValues)
        } catch (error) {
            return error;
        }
    }

    static async filter({ ...query }: UserInterface) {
        const condition = { ...query };

        const _users = await User.findAll({
            where: condition,
            attributes: {
                exclude: filter
            },
            include: [
                {
                    association: "Address"
                }
            ]
        })
        // const users = _users.map((user) => {
        //     const _users = { ...user.dataValues }
        //     return omit(_users,"password","reset_token", "reset_token_expires","verification_token","verification_token_expires");
        // }
        // )
        return _users;
    }

    static async delete({ id }: UserInterface) {
        try{
            const _transaction = await sequelize_instance.transaction()
            const _famer = await Famers.destroy({
                where:{
                    user_uuid:id
                },
                transaction:_transaction
            })
            const _agent = await Agent.destroy({
                where:{
                    user_uuid:id
                },
                transaction:_transaction
            })
            const _vet = await Vet_doctor.destroy({
                where:{
                    user_uuid:id
                },
                transaction:_transaction
            })
            const _guaranter = await Guaranter.destroy({
                where:{
                    user_id:id
                },
                transaction:_transaction
            })
            
                const _user = await User.destroy({
                    where:{
                        id:id
                    },
                    transaction:_transaction
                })
                await _transaction.commit()
                return _user
            
        }
        catch(error){
            return error;
        }

    }

    static async validate_password({ email, password }: { email: string, password: string }) {
        const user = await User.findOne({
            where: {
                email
            },
            attributes: {
                exclude: [
                    "address_id",
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
            },
            include: [
                {
                    association: "Address"
                },
                {   
                    association:"Agency"
                }
            ]

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
        const _user = { ...user.dataValues }

        return omit(_user, "password", "reset_token", "reset_token_expires", "verification_token", "verification_token_expires");
    }

    static async avatar({ url, id }: { url: string, id: string }) {
        const user_image = User.update({
            avatar: url
        },
            {
                where: {
                    id: url
                }
            }
        )
        return user_image;
    }

    static async uploadAvatar({ file }: { file: any }) {
        const image = await uploader({
            file: file?.path
        });

        return image;
    }

}
const filter = [
    "password",
    "address_id",
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