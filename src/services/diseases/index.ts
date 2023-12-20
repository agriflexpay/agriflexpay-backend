import { Disease_type } from "../../types/type"
import sequelize_instance from "../../models"
import { generateUUID } from "../../funct/generateId"
import { omit } from "lodash"
interface Disease_types extends Disease_type { }
const Disease = sequelize_instance.models.Disease

export default class DiseasesService {

    static async create({ ...disease }: { disease: Disease_types }) {
        try {
            const data = {
                ...disease, id: generateUUID()
            }
            const _disease = await Disease.create(data)
            return _disease
        } catch (error) {
            return error
        }
    }

    static async nameAndpattern({ id, disease }: { disease: Disease_types, id: string }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            if (thisDisease) {
                thisDisease.dataValues.name = disease?.name
                thisDisease.dataValues.occurance_pattern = disease?.occurance_pattern
            }
            const data = omit(thisDisease?.dataValues, "id")
            const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
            return sendUpdate


        } catch (error) {
            return error
        }
    }
    static async updateCauses({ id, disease_causes, deleteflag }: { disease_causes: [string], id: string, deleteflag: boolean }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const causes: [string] = thisDisease.dataValues.causes || []
                const new_causes = causes?.filter((cause) => cause !== (null || 'null'))
                if (deleteflag) {
                    const _new_causes = new_causes?.filter((cause) => !disease_causes?.includes(cause))
                    data.causes = _new_causes
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    disease_causes?.forEach((cause) => {
                        if (!new_causes?.includes(cause)) {
                            new_causes?.push(cause)
                        }
                    }
                    )
                    data.causes = new_causes
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }

            }
        } catch (error) {
            return error
        }
    }

    static async updatePrevention({ id, prevention_and_control,deleteflag }: { prevention_and_control: [string], id: string,deleteflag:boolean }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const prevention: [string] = thisDisease.dataValues.prevention_and_control || []
                const new_prevention = prevention?.filter((prevent) => prevent !== (null || 'null'))
                if (deleteflag) {
                    const _new_prevention = new_prevention?.filter((prevent) => !prevention_and_control?.includes(prevent))
                    data.prevention_and_control = _new_prevention
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    prevention_and_control?.forEach((prevent) => {
                        if (!new_prevention?.includes(prevent)) {
                            new_prevention?.push(prevent)
                        }
                    }
                    )
                    data.prevention_and_control = new_prevention
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }
            }
        } catch (error) {
            return error
        }
    }
    static async updateTransmission({ id, transmission,deleteflag }: { transmission: [string], id: string,deleteflag:boolean }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const transmissions: [string] = thisDisease.dataValues.transmission || []
                const new_transmissions = transmissions?.filter((transmission) => transmission !== (null || 'null'))
                if (deleteflag) {
                    const _new_transmissions = new_transmissions?.filter((transmission) => !transmission?.includes(transmission))
                    data.transmission = _new_transmissions
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    transmission?.forEach((transmission) => {
                        if (!new_transmissions?.includes(transmission)) {
                            new_transmissions?.push(transmission)
                        }
                    }
                    )
                    data.transmission = new_transmissions
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }
            }
        } catch (error) {
            return error
        }
    }
    static async updateSignsAndSymptoms({ id, signs_and_symptoms,deleteflag }: { signs_and_symptoms: [string], id: string,deleteflag:boolean }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const signs: [string] = thisDisease.dataValues.signs_and_symptoms || []
                const new_signs = signs?.filter((sign) => sign !== (null || 'null'))
                if (deleteflag) {
                    const _new_signs = new_signs?.filter((sign) => !signs_and_symptoms?.includes(sign))
                    data.signs_and_symptoms = _new_signs
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    signs_and_symptoms?.forEach((sign) => {
                        if (!new_signs?.includes(sign)) {
                            new_signs?.push(sign)
                        }
                    }
                    )
                    data.signs_and_symptoms = new_signs
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }
            }
        } catch (error) {
            return error
        }
    }
    static async updateTreatment({ id, treatment,deleteflag }: { treatment: [string], id: string,deleteflag:boolean }) {
        try {
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const treatments: [string] = thisDisease.dataValues.treatment || []
                const new_treatments = treatments?.filter((treatment) => treatment !== (null || 'null'))
                if (deleteflag) {
                    const _new_treatments = new_treatments?.filter((treatment) => !treatment?.includes(treatment))
                    data.treatment = _new_treatments
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    treatment?.forEach((treatment) => {
                        if (!new_treatments?.includes(treatment)) {
                            new_treatments?.push(treatment)
                        }
                    }
                    )
                    data.treatment = new_treatments
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }
            }
        } catch (error) {
            return error
        }
    }

    static async updateVictims({ id, victims,deleteflag }: { victims: [string], id: string,deleteflag:boolean }) {
        try{
            const thisDisease = await Disease.findByPk(id)
            const data = omit(thisDisease?.dataValues, "id")
            if (thisDisease?.dataValues) {
                const _victims: [string] = thisDisease.dataValues.victim || []
                const new_victims = _victims?.filter((victim) => victim !== (null || 'null'))
                if (deleteflag) {
                    const _new_victims = new_victims?.filter((victim) => !victims?.includes(victim))
                    data.victim = _new_victims
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: true, data }
                }
                else {
                    victims?.forEach((victim) => {
                        if (!new_victims?.includes(victim)) {
                            new_victims?.push(victim)
                        }
                    }
                    )
                    data.victim = new_victims
                    const sendUpdate = await Disease.update({ ...data }, { where: { id: id } })
                    return { sendUpdate, deleted: false, data }
                }
            }
        }
        catch(error){
            return error
        }
    }
    static async fetch({ id }: { id: string }) {
        const disease = await Disease.findByPk(id)
        return disease
    }
    static async fetchAll() {
        const diseases = await Disease.findAll()
        return diseases
    }
    static async delete({ id }: { id: string }) {
        const disease = await Disease.destroy({
            where: {
                id: id
            }
        })
        return disease
    }


}