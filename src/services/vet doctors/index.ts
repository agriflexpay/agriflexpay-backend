
import { omit } from "lodash";
import {Vet_doctor_type} from "../../types/type"
import sequelize_instance from "../../models/index";
import  {generateUUID} from "../../funct/generateId"
const Vet_Doctor = sequelize_instance.models.Vet_doctor
const Famers = sequelize_instance.models.Famer
interface Vet_DoctorType extends Vet_doctor_type { }
class Vet_DoctorServices {
    static async createVet_doctor(input: Vet_DoctorType) {
        try {
            const farmer = await Vet_Doctor.create({
                id: generateUUID(),
                ...input
            })
            return farmer
        } catch (error) {
        return error
        }
    }

    static async getAllVet_doctorss() {
        try {
            const Vet_doctorss = await Vet_Doctor.findAll(
                {
                    attributes: {
                        exclude: filter
                    },
                    include: [
                        {
                            association: "User",
                            attributes: {
                                exclude: filter
                            },
                        },
                        {
                            association: "Agency"
                        }
                    ]
                }
            )
            return Vet_doctorss
        } catch (error) {
            return error
        }
    }

    static async getOneVet_doctor({user_uuid}:{user_uuid:string}) {
        try {
            const Vet_doctors = await Vet_Doctor.findOne({
                where: {
                    user_uuid: user_uuid
                },
                include: [
                    {
                        association: "User",
                        attributes: {
                            exclude: filter
                        },
                    },
                    {
                        association: "Agency"
                    },
                    {
                        association: "Agent"
                    }
                ]
            })
            const famers = Vet_doctors?.dataValues?.famer_uuid||[]
            const famers_data = await Famers.findAll({
                where:{
                    id:famers
                }
            })
            console.log(famers_data)
            // const famers = Vet_doctors?.dataValues?.famer_uuid||[]
            // const famers_data = await Famers.findAll({
            //     where:{
            //         id:famers
            //     }
            // })
            // console.log(famers)
            // //inject famers data to Vet_doctors
            const data = {
                ...Vet_doctors?.dataValues,
                famers:famers_data
            }
            return data
           
        } catch (error) {
            return error
        }
    }
    static async getOneVet_doctorByAgent({agent_uuid}:{agent_uuid:string}) {
        try {
            const Vet_doctors = await Vet_Doctor.findOne({
                where: {
                    agent_uuid: agent_uuid
                },
                include: [
                    {
                        association: "User",
                        attributes: {
                            exclude: filter
                        },
                    },
                   
                ]
            })
   

            return Vet_doctors
        } catch (error) {
            return error
        }
    }

    static async deleteVet_doctors(user_uuid: string) {
        try {
            const Vet_doctors = await Vet_Doctor.destroy({
                where: {
                    user_uuid: user_uuid
                }
            })
            return Vet_doctors
        } catch (error) {
            return error
        }
    }
    static async addAgent({user_uuid,agent_uuid}:{user_uuid:string,agent_uuid:string}) {
        try {
            const Vet_doctor = await Vet_Doctor.update({
                agent_uuid:agent_uuid
            },{
                where:{
                    user_uuid:user_uuid
                }
            })
            return Vet_doctor
        } catch (error) {
            return error
        }
    }
    static async addFarmers({user_uuid,famers,deleteFalg}:{user_uuid:string,famers:string[],deleteFalg:boolean}) {
        try {
            const Vet_doctor = await Vet_Doctor.findOne({
                where:{
                    user_uuid:user_uuid
                }
            })
            if(Vet_doctor){
                if(deleteFalg){
                   let existing_famers = Vet_doctor?.dataValues?.famer_uuid||[]
                   //delete incoming famers[] elements from existing_famers[] elements
                     const new_famers = existing_famers.filter((famer:any)=>!famers.includes(famer))
                      const data=  await Vet_Doctor.update({
                            famer_uuid:new_famers
                        },{
                            where:{
                                user_uuid:user_uuid
                            }
                        })
                        return data

                }else{
                    let existing_famers = Vet_doctor?.dataValues?.famer_uuid||[]
                    //add incoming famers[] elements to existing_famers[] elements if not exist
                    const new_famers = famers.filter((famer)=>!existing_famers.includes(famer))
                    const data=  await Vet_Doctor.update({
                        famer_uuid:[...existing_famers,...new_famers]
                    },{
                        where:{
                            user_uuid:user_uuid
                        }
                    })
                    return data
                }
            }
            return Vet_doctor
        } catch (error) {
            return error
        }
    }
}
const filter = ["password",
    "created_at",
    "updated_at",
    "address_id",
    "reset_password_token",
    "reset_password_expires",
    "reset_token",
    "reset_token_expires",
    "is_account_verified",
    "verification_token",
    "verification_token_expires"
]
export default Vet_DoctorServices;