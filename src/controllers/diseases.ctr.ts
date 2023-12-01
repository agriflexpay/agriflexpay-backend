import { Request,Response } from "express";
import DiseasesService  from "../services/diseases/index";
import ResponseService from "@/funct/responce";

export class DiseasesController {
    static async create(req: Request, res: Response) {
        try {
            const data = await DiseasesService.create(req.body)
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async update(req: Request, res: Response) {
        try {
            const data = await DiseasesService.update({id:req.params.id,disease: req.body})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async fetch(req: Request, res: Response) {
        try {
            const data = await DiseasesService.fetch({id:req.params.id})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async fetchAll(req: Request, res: Response) {
        try {
            const data = await DiseasesService.fetchAll()
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            const data = await DiseasesService.delete({id:req.params.id})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }

}