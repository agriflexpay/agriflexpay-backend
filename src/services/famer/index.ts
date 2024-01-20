
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
            const farmers = await Famer.findAll()
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
                        exclude: ["password",
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
                 },
                 {
                    association: "Agency"
                }

                ]
            })
            return farmer
        } catch (error) {
            return error
        }
    }

    static async deleteFarmer(input: FamerType) {
        try {
            const farmer = await Famer.destroy({
                where: {
                    ...input
                }
            })
            return farmer
        } catch (error) {
            return error
        }
    }
}

export default FamerServices;