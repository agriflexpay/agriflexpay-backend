import sequelize_instance from "../../models/index"
import { Plan_type } from "../../types/type"
import { generateUUID } from "../../funct/generateId";
const Plan = sequelize_instance.models.Plan

interface BusinessPlanInterface extends Plan_type { }

export default class BusinessPlanService {
    static async create({plan_uuid,vendor_uuid}:{plan_uuid:string,vendor_uuid:string}) {
        try {
            const _plan = await Plan.create(
                {
                    id: generateUUID(),
                    plan_uuid: plan_uuid,
                    vendor_uuid:vendor_uuid
                }
            );
            return _plan;
        }
        catch (error) {
            return error
        }
    }
    static async fetch({ id }:{ id:string}) {
        const _plan = await Plan.findOne({
            where: {
                id: id
            },
            include: [{
                all: true,
                nested: true
            }]

        })
        return _plan
    }
    static async fetchByPlan({ plan_uuid }:{plan_uuid:string}) {
        const _plan = await Plan.findOne({
            where: {
                plan_uuid: plan_uuid
            },
            include: [{
                all: true,
                nested: true
            }]

        })
        return _plan
    }
    
    static async fetchAll() {
        const plans = await Plan.findAll(
            {
                include: [{
                    all: true,
                    nested: true
                }]
            }
        );
        return plans;
    }
    static async fetchByAgency({ agency_uuid }:{agency_uuid:string}) {
        const plans = await Plan.findAll(
            {
                where: {
                    vendor_uuid: agency_uuid
                },
                include: [{
                    all: true,
                    nested: true
                }]
            }
        );
        return plans;
    }
    static async delete({id}:{id:string}) {
        const _plan = await Plan.destroy({
            where: {
                id: id
            }
        })
        return _plan;
    }
    static async filter({ ...query }:{[key:string]:any}) {
        const condition = { ...query };

        const _plans = await Plan.findAll({
            where: condition,
            include: [{
                all: true,
                nested: true
            }]
        });

        return _plans;
    }

}