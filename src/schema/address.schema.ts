import {number, object, string, TypeOf } from "zod";

const addressSchema = object(
    {
        body: object({
            country: string({
                required_error: "Country is required"
            }),

            county: string({
                required_error: "County is required"
            }),
            sub_county: string({
                required_error: "Subcounty is required"
            }),
            ward: string({
                required_error: "Ward is required"
            }),
            location: string({
                required_error: "Location is required"
            }),
            sub_location: string({
                required_error: "Sublocation is required"
            }),
            village: string({
                required_error: "Village is required"
            }),

        })
    })

 export   const params = object({
        id: string({
            required_error: "Address ID required"
        })
    })

export default addressSchema;

export type CreateAddressInput = TypeOf<typeof addressSchema>;