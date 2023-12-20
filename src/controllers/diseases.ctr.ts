import { Request,Response } from "express";
import DiseasesService  from "../services/diseases/index";
import ResponseService from "../funct/responce";

export class DiseasesController {
    static async create(req: Request, res: Response) {
        try {
            const data = await DiseasesService.create(req.body)
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async nameAndpattern(req: Request, res: Response) {
        try {
            const data = await DiseasesService.nameAndpattern({id:req.params.id,disease: req.body})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async updateCauses(req: Request, res: Response) {
        try {
            const {deleteflag} = req.body
            const data = await DiseasesService.updateCauses({id:req.params.id,disease_causes: req.body.causes,deleteflag})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async updatePrevention(req: Request, res: Response) {
        try {
            const data = await DiseasesService.updatePrevention({id:req.params.id,prevention_and_control: req.body.prevention_and_control,deleteflag:req.body.deleteflag})
            return ResponseService.success({res, data})
        } catch (error) {
            return ResponseService.error({res, error})
        }
    }
    static async updateTransmission(req: Request, res: Response) {
        try{
            const data = await DiseasesService.updateTransmission({id:req.params.id,transmission: req.body.transmission,deleteflag:req.body.deleteflag})
            return ResponseService.success({res, data})
        }
        catch(error){
            return ResponseService.error({res, error})
        }
    }
    static async updateSignsAndSymptoms(req: Request, res: Response) {
        try{
            const data = await DiseasesService.updateSignsAndSymptoms({id:req.params.id,signs_and_symptoms: req.body.signs_and_symptoms,deleteflag:req.body.deleteflag})
            return ResponseService.success({res, data})
        }
        catch(error){
            return ResponseService.error({res, error})
        }
    }
    static async updateTreatment(req: Request, res: Response) {
        try{
            const data = await DiseasesService.updateTreatment({id:req.params.id,treatment: req.body.treatment,deleteflag:req.body.deleteflag})
            return ResponseService.success({res, data})
        }
        catch(error){
            return ResponseService.error({res, error})
        }
    }
    static async updateVictims(req: Request, res: Response) {
        try{
            const data = await DiseasesService.updateVictims({id:req.params.id,victims: req.body.victim,deleteflag:req.body.deleteflag})
            return ResponseService.success({res, data})
        }
        catch(error){
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