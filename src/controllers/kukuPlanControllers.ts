import { Request, Response } from "express";
import ResponseService from "../funct/responce"
import KukuPlanService from "../services/kukuPlan/index";

class KukuPlanController {
    static async create(req: Request, res: Response) {
        try {
            const kuku = req.body;
            const data = await KukuPlanService.create(kuku);
            return ResponseService.success({ res, data: data });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const kuku = req.body;
            const data = await KukuPlanService.update({
                id:req.params?.id,
                data:kuku
            });
            return ResponseService.success({ res, data: data });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }
    static async fetch(req: Request, res: Response) {
        try {
            const id = req?.params?.id;
            const data = await KukuPlanService.fetch({
                id: id
            });
            return ResponseService.success({ res, data: data });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }
    static async fetchAll(req: Request, res: Response) {
        try {
            const data = await KukuPlanService.fetchAll();
            return ResponseService.success({ res, data: data });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            const kuku = req.params.id;
            const data = await KukuPlanService.delete({
                id: kuku
            });
            return ResponseService.success({ res, data: data });
        } catch (error) {
            return ResponseService.error({ res, error });
        }
    }
}

export default KukuPlanController;