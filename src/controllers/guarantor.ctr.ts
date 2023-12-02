import ResponseService from "../funct/responce";
import GuanterSevice from "../services/guarantor"
import { Request, Response } from "express";

export class GuarantorController {
static async create(req: Request, res: Response) {
    try {
        const data = await GuanterSevice.create({guarantor:req.body});
        return ResponseService.success({res, data});
    } catch (error) {
        return ResponseService.error({res, error});
    }
}
static async update(req:Request, res:Response){
    try {
        const data = await GuanterSevice.update({id:req.params.id, guarantor:req.body});
        return ResponseService.success({res, data});
    } catch (error) {
        return ResponseService.error({res, error});
    }
}

static async get(req:Request, res:Response){
    try {
        const data = await GuanterSevice.get({id:req.params.id});
        return ResponseService.success({res, data});
    } catch (error) {
        return ResponseService.error({res, error});
    }
}

static async getAll(req:Request, res:Response){
    try {
        const data = await GuanterSevice.getAll();
        return ResponseService.success({res, data});
    } catch (error) {
        return ResponseService.error({res, error});
    }
}

static async delete(req:Request, res:Response){
    try {
        const data = await GuanterSevice.delete({id:req.params.id});
        return ResponseService.success({res, data});
    } catch (error) {
        return ResponseService.error({res, error});
    }
}


}