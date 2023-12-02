import sequelize_instance from "../../models/index"

import { Guarantor_type } from "@/types/type"

interface Guarantor_interface extends Guarantor_type {}

const Guarantor = sequelize_instance.models.Guarantor

export default class GuarantorService {
    static async create({ guarantor }: { guarantor: Guarantor_interface }) {
        try{
            const created_At = new Date()
            const updated_At = new Date()
            const data = {
                ...guarantor,
                created_At,
                updated_At
            }
            const guaranter = await Guarantor.create(data)
            return guaranter.toJSON()
        }
        catch(error){
            return false
        }
    }

    static async update({ id, guarantor }: { id: string; guarantor: Guarantor_interface }) {
        try{
            const updated_At = new Date()
            const data = {
                ...guarantor,
                updated_At
            }
            const _guarantor = await Guarantor.update(
                data,
                {
                    where: {
                        id: id
                    }
                }
            )
            return _guarantor
        }catch(error){
            return false
        }
    }

    static async get({ id }: { id: string }) {
        return await Guarantor.findOne({ where: { id } })
    }

    static async getAll() {
        return await Guarantor.findAll()
    }

    static async delete({ id }: { id: string }) {
        return await Guarantor.destroy({ where: { id } })
    }
}