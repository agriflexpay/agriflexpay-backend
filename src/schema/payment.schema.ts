import {number, object, string, TypeOf } from "zod";
export const addressSchema = object(
    {
        body: object(
            {
                code: string({
                    required_error: "Code is required"
                }),
                amount: number({
                    required_error: "Amount is required"
                }),
                paymentMode: string({
                    required_error: "Payment Mode is required"
                }),
                user_id: string({
                    required_error: "User ID is required"
                }),
                plan_id: string({
                    required_error: "Plan ID is required"
                }),
                vendor_id: string({
                    required_error: "Vendor ID is required"
                }),
                phone: number({
                    required_error: "Phone is required"
                })
            }
        )
    })
export const params = object({
    id: string({
        required_error: "Address ID required"
    })
})

export type CreateAddressInput = TypeOf<typeof addressSchema>;