import sequelize_instance from "@/models"
import { Address_type } from "../../types/type"

const Address = sequelize_instance.models.address

interface AddressInterface extends Address_type { }

export default class AddressService {
    static async create({...address}:{address: AddressInterface}) {
        try {
            const created_At = new Date()
            const updated_At = new Date()
            const data = { ...address, created_At, updated_At }
            return await Address.create(data)
        } catch (error) {
            return false
        }
    }

    static async update({ id, ...address }: {address: AddressInterface,id:string}) {
        try {
            const updated_At = new Date()
            const data = { ...address, updated_At }
            const _address = await Address.update(data, { where: { id: id } })
            return _address
        } catch (error) {
            return false
        }
    }
    static async fetch({ id }: { id: string }) {
        const _address = await Address.findByPk(id)
        return _address
    }

    static async fetchAll() {
        const addresses = await Address.findAll()
        return addresses
    }

    static async delete({ id }: { id: string }) {
        const _address = await Address.destroy({ where: { id: id } })
        return _address
    }

    static async fetchByUserId({ user_id }:{user_id:string}) {
        const _address = await Address.findOne({ where: { user_id: user_id } })
        return _address
    }
}
