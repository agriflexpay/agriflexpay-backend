import {array, boolean, number, object, string, TypeOf } from "zod";

 const createVetDoctorSchema = object(
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
       params: object({
              user_uuid: string({
                required_error: "User ID is required"
              })
         })
    })
const updateVetAddAgent = object(
    {
        body: object({
            user_uuid: string({
                required_error: "User ID is required"
            }),
            agent_uuid: string({
                required_error: "Agency ID is required"
            })
        })
    })
    const updateVetAddFarmers = object(
        {
            body: object({
                user_uuid: string({
                    required_error: "User ID is required"
                }),
                famers: array(string({
                    required_error: "famers ID's is required"
                })),
                deleteFalg: boolean({
                    required_error: "deleteFalg is required"
                })
            })
        })

 const deleteVetDoctorSchema = object(
    {
        params: object({
            user_uuid: string({
                required_error: "VetDoctor ID is required"
            })
        })
    })

export const vetSchema={
    createVetDoctorSchema,
    deleteVetDoctorSchema,
    params,
    updateVetAddAgent,
    updateVetAddFarmers
}