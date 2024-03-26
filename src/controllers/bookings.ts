import { Request, Response } from "express";
import ResponseService from "../funct/responce"
import BookingsService from "../services/bookings"
class BookingsControler {
    static async create(req: Request, res: Response) {
        const { user_uuid, plan_uuid, vendor_uuid} = req.body
        const _plan = await BookingsService.create({ user_uuid, plan_uuid, vendor_uuid})
         if(!_plan){
            ResponseService.error({res:res, error:"Plan not created"})
         }

         ResponseService.success({res:res, data:_plan})
        
    } 
    static async fetch(req: Request, res: Response) {
        const { id } = req.params
        const _plan = await BookingsService.fetch({ id })
        if(!_plan){
            ResponseService.error({res:res, error:"Plan not found"})
        }
        ResponseService.success({res:res, data:_plan})
    }

    static async fetchByPlan(req: Request, res: Response) {
        const { plan_uuid } = req.params
        const _plan = await BookingsService.fetchByPlan({ plan_uuid })
        if(!_plan){
            ResponseService.error({res:res, error:"Plan not found"})
        }
        ResponseService.success({res:res, data:_plan})
    }


    static async fetchAll(req: Request, res: Response) {
        const _plan = await BookingsService.fetchAll()
        if(!_plan){
            ResponseService.error({res:res, error:"Plan not found"})
        }
        ResponseService.success({res:res, data:_plan})
    }

    static async fetchByAgency(req: Request, res: Response) {
        const { vendor_uuid } = req.params
        const _plan = await BookingsService.fetchByAgency({ vendor_uuid })
        if(!_plan){
            ResponseService.error({res:res, error:"Plan not found"})
        }
        ResponseService.success({res:res, data:_plan})
    }
    static async fetchByUser(req: Request, res: Response) {
        const { user_uuid } = req.params
        const _plan = await BookingsService.fetchByUser({ user_uuid })
        if(!_plan){
            ResponseService.error({res:res, error:"Plan not found"})
        }
        ResponseService.success({res:res, data:_plan})
    }
}
export default BookingsControler;