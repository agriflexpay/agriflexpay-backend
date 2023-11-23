import { Response } from "express";
import log from "./logger";


export default class ResponseService{
    static success({res,data}:{res: Response, data: any}){
        return res.status(200).json({
            data,
        })
    }
    static error({res,error}:{res: Response, error: any}){
        log.error(error);
        return res.status(400).json({
            error: error.message
        })
    }
    static notFound(res: Response, error: any){
        log.error(error);
        return res.status(404).json({
            error: error.message
        })
    }
    static update(res: Response, data: any){
        return res.status(200).json({
            data
        })
    }
}