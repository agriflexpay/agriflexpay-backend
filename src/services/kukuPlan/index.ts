import sequelize_instance from "../../models/index";
import { KukuPlan_type } from "../../types/type";
import { generateUUID } from "../../funct/generateId";
interface KukuPlanInterface extends KukuPlan_type { }
const KukuPlan = sequelize_instance.models.KukuPlan;

export default class KukuPlanService {

    static async create({ ...data }: KukuPlanInterface) {
       try {    
        const kukuPlan = await KukuPlan.create({
            id:generateUUID(),
            ...data});
        return kukuPlan.dataValues
       }
         catch (error) {
              return error
         }
    }


    static async update({ id, ...data }:{id:string,data: KukuPlanInterface}) {
        const kukuPlan = await KukuPlan.update({...data}, {
            where: {
                id: id
            }
        });
        return kukuPlan;
    }


    static async fetch({ id }: KukuPlanInterface) {
        console.log(id)
        const kukuPlan = await KukuPlan.findByPk(id)
        return kukuPlan?.dataValues
    }

    static async fetchAll() {
        const kukuPlan = await KukuPlan.findAll()
        return kukuPlan
    }


    static async delete({ id }: KukuPlanInterface) {
      try {
        const kukuPlan = await KukuPlan.destroy({
            where: {
                id: id
            }
        });
        return kukuPlan;
      
    }
    catch (error) {
        return error
    }
    }

}

