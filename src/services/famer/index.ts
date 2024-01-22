
import { omit } from "lodash";
import {Famer_type} from "../../types/type"
import sequelize_instance from "../../models/index";
import  {generateUUID} from "../../funct/generateId"
const Famer = sequelize_instance.models.Famer
interface FamerType extends Famer_type { }
class FamerServices {
    static async createFarmer(input: FamerType) {
        try {
            const farmer = await Famer.create({
                id: generateUUID(),
                ...input
            })
            return farmer
        } catch (error) {
        return error
        }
    }

    static async getAllFarmers() {
        try {
            const farmers = await Famer.findAll(
                {
                    attributes: {
                        exclude: filter
                    },
                    include: [
                        {
                            association: "User",
                            attributes: {
                                exclude: filter
                            },
                        },
                        {
                            association: "Agency"
                        },
                        {
                            association: "Plan"
                        }
                    ]
                }
            )
            return farmers
        } catch (error) {
            return error
        }
    }

    static async getOneFarmer(input: FamerType) {
        try {
            const farmer = await Famer.findOne({
                where: {
                    ...input
                },
                include: [
                 {
                    association: "User",
                    attributes: {
                        exclude: filter
                    },
                 },
                 {
                    association: "Agency"
                },
                {
                    association: "Plan"
                }

                ]
            })
            return farmer
        } catch (error) {
            return error
        }
    }

    static async deleteFarmer(user_uuid: string) {
        try {
            const farmer = await Famer.destroy({
                where: {
                    user_uuid: user_uuid
                }
            })
            return farmer
        } catch (error) {
            return error
        }
    }
}
const filter = ["password",
    "created_at",
    "updated_at",
    "address_id",
    "reset_password_token",
    "reset_password_expires",
    "reset_token",
    "reset_token_expires",
    "is_account_verified",
    "verification_token",
    "verification_token_expires"
]
export default FamerServices;