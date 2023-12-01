import sequelize_instance from "../../models/index"
import { Agency_type } from "@/types/type"

const Agency = sequelize_instance.models.agency

interface AgencyInterface extends Agency_type { }

export default class AgencyService {

    static async create({ ...agency }: { agency: AgencyInterface }) {
        try {
            const created_At = new Date()
            const updated_At = new Date()
            const data = { ...agency, created_At, updated_At }
            return await Agency.create(data)
        } catch (error) {
            return false
        }
    }

    static async update({ id, ...agency }: { agency: AgencyInterface, id: string }) {
        try {
            const updated_At = new Date()
            const data = { ...agency, updated_At }
            const _agency = await Agency.update(data, { where: { id: id } })
            return _agency
        } catch (error) {
            return false
        }
    }

    static async fetch({ id }: { id: string }) {
        const _agency = await Agency.findByPk(id)
        return _agency
    }

    static async fetchAll() {
        const agencies = await Agency.findAll()
        return agencies
    }

    static async delete({ id }: { id: string }) {
        const _agency = await Agency.destroy({ where: { id: id } })
        return _agency
    }

    static async fetchByUserId({ user_id }: { user_id: string }) {
        const _agency = await Agency.findOne({ where: { user_id: user_id } })
        return _agency
    }

    static async fetchByUserIdAndAgencyName({ user_id, agency_name }: { user_id: string, agency_name: string }) {
        const _agency = await Agency.findOne({ where: { user_id: user_id, agency_name: agency_name } })
        return _agency
    }

    static async fetchByAgencyName({ agency_name }: { agency_name: string }) {
        const _agency = await Agency.findOne({ where: { agency_name: agency_name } })
        return _agency
    }

    static async fetchByAgencyId({ agency_id }: { agency_id: string }) {
        const _agency = await Agency.findOne({ where: { id: agency_id } })
        return _agency
    }
}