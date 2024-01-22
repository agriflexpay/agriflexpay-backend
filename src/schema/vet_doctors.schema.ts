import {number, object, string, TypeOf } from "zod";

 const createVetDoctorSchema = object(
    {
        body: object({
            user_uuid: string({
                required_error: "User ID is required"
            }),
            agency_uuirund: string({
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

 const deleteVetDoctorSchema = object(
    {
        params: object({
            user_uuid: string({
                required_error: "VetDoctor ID is required"
            })
        })
    })

export const famerSchema={
    createVetDoctorSchema,
    deleteVetDoctorSchema,
    params
}