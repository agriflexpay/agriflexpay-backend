import {number, object, string, TypeOf } from "zod"

export const GuarantorSchema = object(
    {
        body: object({
            fname: string({
                required_error: "First Name is required"
            }),
            lname: string({
                required_error: "Last name is required"
            }),
            email: string({
                required_error: "Email required"
            }).email("Not a valid email"),
            national_id: number({
                required_error: "National ID required"
            }),
            krapin: string({
                required_error: "KRA PIN required"
            }),
            address_id: string({
                required_error: "Address ID required"
            })
        })
    })

    export   const params = object({
            id: string({
                required_error: "Guarantor ID required"
            })
        })
export type CreateGuarantorInput = TypeOf<typeof GuarantorSchema>