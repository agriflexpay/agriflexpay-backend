import {string, number, object} from 'zod'


export const Schema = object({
    body: object({
        firstName: string({
            required_error: 'First name is required'
        }),
        lastName: string({
            required_error: 'Last name is required'
        }),
        email: string({
            required_error: 'Email is required'
        }),
        nationalId: string({
            required_error: 'National ID is required'
        }),
        phoneNumber: string({
            required_error: 'Phone number is required'
        }),
        address_id: string({
            required_error: 'Address ID is required'
        }),
    })
})

export const params = object({
    id: string({
        required_error: 'Registration ID is required'
    })
})

const registrationSchema = {
        Schema,params
}

export default registrationSchema;

export type CreateRegistrationInput = typeof registrationSchema;