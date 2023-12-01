import {number, object, string, TypeOf } from "zod";

export const businessPlanSchema = object(
    {
        body: object({
            name: string({
                required_error: "Name is required"
            }),
            description: string({
                required_error: "Description is required"
            }),
            amount: number({
                required_error: "Amount is required"
            }),
            duration: number({
                required_error: "Duration is required"
            }),
            interest_rate: number({
                required_error: "Interest rate is required"
            }),
            vendor_id: string({
                required_error: "Vendor ID is required"
            })

        })
    })

 export   const params = object({
        id: string({
            required_error: "Business Plan ID required"
        })
    })



export type CreateBusinessPlanInput = TypeOf<typeof businessPlanSchema>;