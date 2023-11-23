import {number, object, string, TypeOf } from "zod";

export const vendorSchema = object(
    {
        body: object(
            {
                name: string({
                    required_error: "Name is required"
                }),
                email: string({
                    required_error: "Email is required"
                }).email("Not a valid email"),
                description: string({
                    required_error: "Description is required"
                }),
                phone: number({
                    required_error: "Phone is required"
                }),
                address_id: string({
                    required_error: "Address ID is required"
                })
            }
        )
    }
)

export const params = object({
    id: string({
        required_error: "Vendor ID required"
    })
})

export type CreateVendorInput = TypeOf<typeof vendorSchema>;