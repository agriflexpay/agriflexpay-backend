import {number, object, string, TypeOf } from "zod";

 const createFarmerSchema = object(
    {
        body: object({
            user_uuid: string({
                required_error: "User ID is required"
            }),
            agent_uuid: string({
                required_error: "Agent ID is required"
            }),
            agency_uuid: string({
                required_error: "Agency ID is required"
            }),
            plan_uuid: string({
                required_error: "Plan ID is required"
            })
        })
    })

    const params = object({
       params: object({
              user_uuid: string({
                required_error: "User ID is required"
              })
         })
    })
    const famer_uuid = object({
        params: object({
            farmer_uuid: string({
                required_error: "Farmer ID is required"
            })
        })
    })

 const deleteFarmerSchema = object(
    {
        params: object({
            user_uuid: string({
                required_error: "Farmer ID is required"
            })
        })
    })

export const famerSchema={
    createFarmerSchema,
    deleteFarmerSchema,
    params,
    famer_uuid
}