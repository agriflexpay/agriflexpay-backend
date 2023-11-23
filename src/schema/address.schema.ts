import {number, object, string, TypeOf } from "zod";

const addressSchema = object(
    {
        body: object({
            county: string({
                required_error: "County is required"
            }),
            subcounty: string({
                required_error: "Subcounty is required"
            }),
            location: string({
                required_error: "Location is required"
            }),
            sublocation: string({
                required_error: "Sublocation is required"
            }),
            phone: number({
                required_error: "Phone number is required"
            })
        })
    })

 export   const params = object({
        id: string({
            required_error: "Address ID required"
        })
    })

export type CreateAddressInput = TypeOf<typeof addressSchema>;