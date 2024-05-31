import sequelize_instance from "../../models/index"

import { generateUUID } from "../../funct/generateId";
const Bookings = sequelize_instance.models.Bookings
const filter = ["password",
    "created_at",
    "address_id",
    "updated_at",
    "reset_password_token",
    "reset_password_expires",
    "reset_token",
    "reset_token_expires",
    "is_account_verified",
    "verification_token",
    "verification_token_expires"
]



export default class BookingsService {
    static async create({user_uuid,plan_uuid,vendor_uuid}:{user_uuid:string,plan_uuid:string,vendor_uuid:string}) {
        try {
            const _plan = await Bookings.create(
                {
                    id: generateUUID(),
                    user_uuid: user_uuid,
                    plan_uuid: plan_uuid,
                    vendor_uuid:vendor_uuid
                }
            );
            return _plan;
        }
        catch (error) {
            return error
        }
    }
    static async fetch({ id }:{ id:string}) {
        const _plan = await Bookings.findOne({
            where: {
                id: id
            },
            include: [{
                all: true,
                nested: true
            }]

        })
        return _plan
    }
    static async fetchByPlan({ plan_uuid }:{plan_uuid:string}) {
        const _plan = await Bookings.findOne({
            where: {
                plan_uuid: plan_uuid
            },
            include: [{
                all: true,
                nested: true
            }]

        })
        return _plan
    }
    
    static async fetchAll() {
        const plans = await Bookings.findAll(
            {
                include: [{
                        association: "User",
                        attributes: {
                            exclude: filter}
                }]
            }
        );
        return plans;
    }
    static async fetchByUser({ user_uuid }:{user_uuid:string}) {
        const plans = await Bookings.findAll(
            {
                where: {
                    user_uuid: user_uuid
                },
                include: [{
                    all: true,
                    nested: true
                }]
            }
        );
        return plans;
    }

    static async fetchByAgency({ vendor_uuid }:{vendor_uuid:string}) {
        const plans = await Bookings.findAll(
            {
                where: {
                    vendor_uuid: vendor_uuid
                },
                include: [{
                    association: "User",
                        attributes: {
                            exclude: filter}
                },
                {
                    association: "Plan",
                    include:[{
                        all:true,
                        nested:true
                    }]
                },
               
            ]
            }
        );
        return plans;
    }

}