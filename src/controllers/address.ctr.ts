import { Request,Response } from "express"
import AddressService from "../services/address"
import ResponseService from "../funct/responce"
import { CreateAddressInput } from "../schema/address.schema"


export default class AddressController {
    static async create(req:Request<{}, {}, CreateAddressInput["body"]>,res:Response){
        try{
            const address = await AddressService.create({address:req.body});
            if(!address){
                return ResponseService.error({res,error:"Address not created"})
            }
            return ResponseService.success({res,data:address})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async update(req:Request,res:Response){
        try{
            const id = req.params.id;
            const address = await AddressService.update({id,...req.body});
            if(!address){
                return ResponseService.error({res,error:"Address not updated"})
            }
            return ResponseService.success({res,data:address})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetch(req:Request,res:Response){
        try{
            const id = req.params.id;
            const address = await AddressService.fetch({id});
            if(!address){
                return ResponseService.error({res,error:"Address not found"})
            }
            return ResponseService.success({res,data:address})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetchAll(req:Request,res:Response){
        try{
            const addresses = await AddressService.fetchAll();
            if(!addresses){
                return ResponseService.error({res,error:"Addresses not found"})
            }
            return ResponseService.success({res,data:addresses})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async delete(req:Request,res:Response){
        try{
            const id = req.params.id;
            const address = await AddressService.delete({id});
            if(!address){
                return ResponseService.error({res,error:"Address not deleted"})
            }
            return ResponseService.success({res,data:address})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
}