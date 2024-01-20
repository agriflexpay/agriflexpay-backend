import {number, object, string, TypeOf } from "zod";

 const createAgentSchema = object(
    {
        body: object({
            user_uuid: string({
                required_error: "User ID is required"
            }),
            agency_uuid: string({
                required_error: "Agency ID is required"
            })
        })
    })

    const params = object({
        
            params: object(
                {
                    user_uuid: string({
                        required_error: "Agent ID required"
                    })
                }
            )
        
    });
    const agencyParams = object({
            
            params: object(
                {
                    agency_uuid: string({
                        required_error: "Agency ID required"
                    })
                }
            )
    })
 const deleteAgentSchema = object(
    {
        body: object({
            user_uuid: string({
                required_error: "Agent ID is required"
            }),
            agency_uuid: string({
                required_error: "Agency ID is required"
            }),
        })
    })

export const AgentSchema={
    createAgentSchema,
    deleteAgentSchema,
    params,
    agencyParams
}