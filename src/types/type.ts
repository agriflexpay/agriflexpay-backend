export interface User {
    id?: string
    fname?: string
    lname?: string
    email?: string
    password?: string
    national_id?: number
    krapin?: string
    role?: string
    reset_token?: string
    reset_token_expires?: Date
    is_active?: boolean
    address_id?: string
    latitude?: string
    longitude?: string
    is_account_verified?: boolean
    verification_token?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface  Address {
     id?: string
     county?: string
     subcounty?: string
     location?: string
     sublocation?: string
     phone?: number
     createdAt?: Date
     updatedAt?: Date
}

export interface Business_plan {
    id?: string
    name?: string
    description?: string
    amount?: number
    duration?: number
    interest_rate?: number
    vendor_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Guarantor {
    id?: string
    fname?: string
    lname?: string
    email?: string
    national_id?: number
    krapin?: string
    address_id?: string
    user_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Loan {
    id?: string
    amount?: number
    duration?: number
    interest_rate?: number
    guarantor_id?: string
    business_plan_id?: string
    user_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Payment {
    code?: string
    amount?: number
    paymentMode?: string
    user_id?: string
    plan_id?: string
    vendor_id?: string
    phone?: number
    createdAt?: Date
    updatedAt?: Date
}

export interface Vendor {
    id?: string
    name?: string
    email?: string
    description?: string
    phone?: number
    address_id?: string
    createdAt?: Date
    updatedAt?: Date
}