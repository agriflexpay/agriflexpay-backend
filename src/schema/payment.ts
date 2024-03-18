import { number, object, string, TypeOf } from "zod";


const payment_Schema = object(
    {
        body: object(
            {
                phone:number({
                    required_error: "Phone is required"
                }),
                amount: number({
                    required_error: "Amount is required"
                }),
                transactionDesc: string({
                    required_error: "Transaction Description is required"
                }),
            }
        )
    })



export const paymentSchema = {
    mpesaExpress: payment_Schema,
  
}
export type MpesaExpressInput = TypeOf<typeof payment_Schema>;