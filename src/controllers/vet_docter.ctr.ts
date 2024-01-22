import { Request, Response, response } from "express";
import FamerServices  from "../services/famer/index";
import ResponseService from "../funct/responce"

class FamerController {
   static async createFarmer(req: Request, res: Response) {
        try {
            const { user_uuid, agent_uuid, agency_uuid, plan_uuid } = req.body
            const input = {
                user_uuid,
                agent_uuid,
                agency_uuid,
                plan_uuid
            }
            const farmer = await FamerServices.createFarmer(input)
            if (farmer) {
                return ResponseService.success({res,data:farmer})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getAllFarmers(req: Request, res: Response) {
        try {
            const farmers = await FamerServices.getAllFarmers()
            if (farmers) {
                return ResponseService.success({res,data:farmers})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getOneFarmer(req: Request, res: Response) {
        try {
            const { user_uuid } = req.params
            const input = {
                user_uuid
            }
            const farmer = await FamerServices.getOneFarmer(input)
            if (farmer) {
                return ResponseService.success({res,data:farmer})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async deleteFarmer(req: Request, res: Response) {
        try {
            const { user_uuid } = req.params

            const farmer = await FamerServices.deleteFarmer(user_uuid)
            if (farmer) {
                return ResponseService.success({res,data:farmer})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
}

export default FamerController;