import { Express } from "express"
import validate  from "../middleware/validate"
import { requireUser } from "../middleware/requireUser"
import PaymentControler from "../controllers/payment"
import { paymentSchema } from "../schema/payment"
const ApiEndPoint='/api/payment/mpesa/express'
const routes = (app: Express) => {
  app.post(`${ApiEndPoint}`,validate(paymentSchema.mpesaExpress),requireUser,PaymentControler.MpesaExpress)

}

export default routes

