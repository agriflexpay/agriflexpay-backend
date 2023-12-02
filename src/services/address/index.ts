import sequelize_instance from "../../models"
import { Address_type } from "../../types/type"
import { generateUUID } from "../../funct/generateId"
import log from "../../funct/logger"
const Address = sequelize_instance.models.Address

interface AddressInterface extends Address_type { }

export default class AddressService {
    static async create({address}:{address: AddressInterface}) {
        try {
            const data = { 
                ...address,
                 id:generateUUID() }
            log.info(data)
           const _address= await Address.create(data)
            return _address.dataValues
        } catch (error) {
            return error
        }
    }

    static async update({ id, ...address }: {address: AddressInterface,id:string}) {
        try {
            const _address = await Address.update(address, { where: { id: id } })
            return _address
        } catch (error) {
            return false
        }
    }
    static async fetch({ id }: { id: string }) {
        const _address = await Address.findByPk(id)
        return _address?.dataValues
    }

    static async fetchAll() {
        const addresses = await Address.findAll()
        return addresses?.map((address) => address.dataValues)
    }

    static async delete({ id }: { id: string }) {
        const _address = await Address.destroy({ where: { id: id } })
        return _address
    }

    static async fetchByUserId({ user_id }:{user_id:string}) {
        const _address = await Address.findOne({ where: { user_id: user_id } })
        return _address?.dataValues
    }
}
