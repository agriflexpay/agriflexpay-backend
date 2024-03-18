import { Request, Response } from "express";
import ResponseService from "../funct/responce"
import PaymentService from '../services/payment'

class PaymentControler {
    static async MpesaExpress(req: Request, res: Response) {

        const { phone, amount,transactionDesc,  } = req.body
        const token = await PaymentService.gethMpesaAuth()
        if (!token) {
            return ResponseService.error({ res, error: "Error in making payment" })
        }
        const responce = await PaymentService.MpesaExpress(phone, amount,transactionDesc,token)
        if (!responce) {
            return ResponseService.error({ res, error: "Error in making payment" })
        }
        return ResponseService.success({ res, data: responce })
    }
}
export default PaymentControler;