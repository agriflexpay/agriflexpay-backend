import {number, object, string, TypeOf } from "zod";


export const userSchema = object(
    {
        body: object(
            {
                fname: string({
                    required_error: "First Name is required"
                }),
                lname: string({
                    required_error: "Last name is required"
                }),
                password: string({
                    required_error: "Password is required"
                }).min(6, "Password too short, should be 6 chars min"),
                passwordConfirmation: string({
                    required_error: "Password confirmation required"
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
                role: string({
                    required_error: "Role required"
                }),
                address_id: string({
                    required_error: "Address ID required"
                }),
            }
        ).refine(data => data.password === data.passwordConfirmation, {
            message: "Passwords do not match",
            path: ["passwordConfirmation"],
        })
    }
)

export const params = object({
    id: string({
        required_error: "User ID required"
    })
})

export type CreateUserInput = Omit<TypeOf<typeof userSchema>, "passwordConfirmation">;