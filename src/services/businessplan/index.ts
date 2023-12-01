import sequelize_instance from "../../models/index"
import { Business_plan } from "../../types/type"

const Plan = sequelize_instance.models.Plan

interface BusinessPlanInterface extends Business_plan { }

export default class BusinessPlanService {
    static async create({ ...plan }: {plan:BusinessPlanInterface}) {
        try {
            const created_at = new Date();
            const updated_at = new Date();
            const data =
            {
                ...plan,
                created_at,
                updated_at

            }
            const _plan = await Plan.create(data);
            return _plan;
        }
        catch (error) {
            return false
        }
    }

    static async update({ id, ...plan }:{plan: BusinessPlanInterface,id:string}) {
        try {
            const updated_at = new Date()
            const data =
            {
                ...plan,
                updated_at
            }
            const _plan = await Plan.update(
                data,
                {
                    where: {
                        id: id
                    }
                }
            );

            return _plan;
        } catch (error) {
            return false
        }
    }
    static async fetch({ id }:{ id:string}) {
        const _plan = await Plan.findByPk(id)
        return _plan
    }
    static async fetchAll() {
        const plans = await Plan.findAll();
        return plans;
    }
    static async delete({ id }: { id: string }) {
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
        });

        return _plans;
    }

}