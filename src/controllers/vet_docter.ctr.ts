import { Request, Response, response } from "express";
import Vet_DoctorServices from "../services/vet doctors"
import ResponseService from "../funct/responce"

class VetDoctorController {
   static async createVet_doctor(req: Request, res: Response) {
        try {
            const { user_uuid,  agency_uuid } = req.body
            const input = {
                user_uuid,     
                agency_uuid,
            }
            const Vet_doctor = await Vet_DoctorServices.createVet_doctor(input)
            if (Vet_doctor) {
                return ResponseService.success({res,data:Vet_doctor})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getAllVet_doctors(req: Request, res: Response) {
        try {
            const Vet_doctors = await Vet_DoctorServices.getAllVet_doctorss()
            if (Vet_doctors) {
                return ResponseService.success({res,data:Vet_doctors})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getOneVet_doctor(req: Request, res: Response) {
        try {
            const { user_uuid } = req.params
            const Vet_doctor = await Vet_DoctorServices.getOneVet_doctor({user_uuid})
            if (Vet_doctor) {
                return ResponseService.success({res,data:Vet_doctor})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async deleteVet_doctor(req: Request, res: Response) {
        try {
            const { user_uuid } = req.params

            const Vet_doctor = await Vet_DoctorServices.deleteVet_doctors(user_uuid)
            if (Vet_doctor) {
                return ResponseService.success({res,data:Vet_doctor})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async addAgent(req: Request, res: Response) {
        try {
            const { user_uuid,  agent_uuid } = req.body
            const input = {
                user_uuid,     
                agent_uuid,
            }
            const Vet_doctor = await Vet_DoctorServices.addAgent(input)
            if (Vet_doctor) {
                return ResponseService.success({res,data:Vet_doctor})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async addFarmers(req: Request, res: Response) {
        try {
            const { user_uuid,  famers,deleteFalg } = req.body
            const Vet_doctor = await Vet_DoctorServices.addFarmers({
                user_uuid,     
                famers,
                deleteFalg
            })
            if (Vet_doctor) {
                return ResponseService.success({res,data:Vet_doctor})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
}

export default VetDoctorController;