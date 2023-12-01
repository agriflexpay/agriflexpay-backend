import { Disease_type } from "../../types/type"
import sequelize_instance from "../../models"


interface Disease_types extends Disease_type {}
const Disease = sequelize_instance.models.Disease

export default class DiseasesService{

    static async create({...disease}:{disease: Disease_types}){
        try{
            const created_At = new Date()
            const updated_At = new Date()
            const data={
                ...disease, 
                created_At,
                 updated_At}
            const _disease = await Disease.create(data)
            return _disease
        }catch(error){
            return false
        }
}

static async update({id,...disease}:{disease: Disease_types,id:string}){
    try{
        const updated_At = new Date()
        const data={
            ...disease, 
            updated_At}
        const _disease = await Disease.update(
            data,
            {
                where:{
                    id:id
                }
            }
        )
        return _disease
    }catch(error){
        return false
    }
}
    static async fetch({id}:{id:string}){
        const disease = await Disease.findByPk(id)
        return disease
    }
    static async fetchAll(){
        const diseases = await Disease.findAll()
        return diseases
    }
    static async delete({id}:{id:string}){
        const disease = await Disease.destroy({
            where:{
                id:id
            }
        })
        return disease
    }


}