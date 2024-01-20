import { number, object, string, TypeOf } from "zod";

const businessPlanSchema = object(
    {
        body: object({
            vendor_uuid: string({
                required_error: "vendor_uuid is required"
            }),
            plan_uuid: string({
                required_error: "plan_uuid is required"
            }),

        })
    })

const params = object({
    params: object({
        id: string({
            required_error: "id is required"
        })
    })
})

const deleteBusinessPlanSchema = object({
    body: object({
        vendor_uuid: string({
            required_error: "vendor_uuid is required"
        }),
        plan_uuid: string({
            required_error: "plan_uuid is required"
        }),

    })
})

const fetchByAgencySchema = object({
    params: object({
        agency_uuid: string({
            required_error: "agency_uuid is required"
        })
    })
})
export const businessPlanSchemas = {
    businessPlanSchema,
    params,
    fetchByAgencySchema,
    deleteBusinessPlanSchema
}



export type CreateBusinessPlanInput = TypeOf<typeof businessPlanSchema>;