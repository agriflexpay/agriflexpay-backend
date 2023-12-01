import { Response,Request } from "express"
import ResponseService from "../funct/responce"
import AgencyService from "../services/agency"

export default class PlanController{

    static async create(req:Request,res:Response){
        try{
            const agency = await AgencyService.create({agency:req.body})
            if(!agency){
                return ResponseService.error({res,error:" agency not created"})
            }
            return ResponseService.success({res,data:agency})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async update(req:Request,res:Response){
        try{
            const id = req.params.id
            const agency = await AgencyService.update({id,...req.body})
            if(!agency){
                return ResponseService.error({res,error:" agency not updated"})
            }
            return ResponseService.success({res,data:agency})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }

    static async fetch(req:Request,res:Response){
        try{
            const id = req.params.id
            const agency = await AgencyService.fetch({id})
            if(!agency){
                return ResponseService.error({res,error:" agency not found"})
            }
            return ResponseService.success({res,data:agency})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetchAll(req:Request,res:Response){
        try{
            const plans = await AgencyService.fetchAll()
            if(!plans){
                return ResponseService.error({res,error:" Plans not found"})
            }
            return ResponseService.success({res,data:plans})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async delete(req:Request,res:Response){
        try{
            const id = req.params.id
            const agency = await AgencyService.delete({id})
            if(!agency){
                return ResponseService.error({res,error:" agency not deleted"})
            }
            return ResponseService.success({res,data:agency})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetchByUserId(req:Request,res:Response){
        try{
            const user_id = req.params.user_id
            const agency = await AgencyService.fetchByUserId({user_id})
            if(!agency){
                return ResponseService.error({res,error:" agency not found"})
            }
            return ResponseService.success({res,data:agency})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
}