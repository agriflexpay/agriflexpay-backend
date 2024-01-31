export interface User_type {
    id?: string
    agency_uuid?: string
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

export interface  Address_type {
     id?: string
     county?: string
     subcounty?: string
     location?: string
     user_id?: string
     sublocation?: string
     phone?: number
     createdAt?: Date
     updatedAt?: Date
}

export interface Plan_type {
    id?: string
    name?: string
    plan_uuid?: string
    vendor_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Guarantor_type {
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

export interface Agency_type{
    id?: string
    name?: string
    email?: string
    description?: string
    phone?: number
    address_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Disease_type{
    id?: string
    name?: string
    occurance_pattern?: string
    causes?: [string]
    prevention_and_control?: [string]
    transmission?: [string]
    signs_and_symptoms?: [string]
    treatment?: [string]
    victim?: [string]
    location_id?: string
    farmer_id?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface KukuPlan_type{
    id?: string
    name?: string
    description?: string
    amount?: number
    duration?: number
    interest_rate?: number
    vendor_id?: string
    type?: []
    puporse?: string
    maturity?: number
    averageEggProduction?: number
    meatProduction?: number
    averageWeight?: number
    feeding?: string
    setting?: string
    declineinProduction?: number
    diseaseResistance?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Famer_type{
    id?: string
    user_uuid?: string
    agent_uuid?: string
    agency_uuid?: string
    plan_uuid?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface Agent_type{
    id?: string
    user_uuid?: string
    agency_uuid?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface Vendor_type{
    id?: string
    user_uuid?: string
    agency_uuid?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface Plan_type{
    id?: string
    vendor_uuid?: string
    name?: string
    description?: string
    amount?: number
    duration?: number
    interest_rate?: number
    createdAt?: Date
    updatedAt?: Date
}
export interface Vet_doctor_type{
    id?: string
    user_uuid?: string
    agent_uuid?: string
    agency_uuid?: string
    famer_uuid?: string
    createdAt?: Date
    updatedAt?: Date
}
