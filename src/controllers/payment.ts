import { Request, Response } from "express";
import ResponseService from "../funct/responce"
import PaymentService from '../services/payment'

class PaymentControler {
    static async MpesaExpress(req: Request, res: Response) {

        const { phone, amount,transactionDesc,paybill  } = req.body
        const token = await PaymentService.gethMpesaAuth()
        if (!token) {
            return ResponseService.error({ res, error: "No access token" })
        }
        const responce= await PaymentService.MpesaExpress(phone, amount,transactionDesc,token,paybill)
        if (!responce) {
            return ResponseService.error({ res, error: "Error in making payment" })
        }
        if(responce){
            return ResponseService.success({ res, data: responce })
        }
        return ResponseService.success({ res, data: responce })
    }
}
export default PaymentControler;