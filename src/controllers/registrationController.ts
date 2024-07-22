import { Request, Response } from "express";
import ResponseService from "../funct/responce";
import RegistrationService from "../services/registration/index";
class RegistrationController {

    async create(req: Request, res: Response) {
        const response =await RegistrationService.create(req.body);
        return ResponseService.success({ res, data: response });
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const response =await RegistrationService.update(
            req.body,
            id
        );
        return ResponseService.success({ res, data: response });
    }

    async fetch(req: Request, res: Response) {
        const response =await RegistrationService.fetch(req.params.id);
        return ResponseService.success({ res, data: response });
    }

    async fetchAll(req: Request, res: Response) {
        const response =await RegistrationService.fetchAll(req.body);
        return ResponseService.success({ res, data: response });
    }


    async delete(req: Request, res: Response) {
        const response =await RegistrationService.delete(req.params.id);
        return ResponseService.success({ res, data: response });
    }
}





export default new RegistrationController();