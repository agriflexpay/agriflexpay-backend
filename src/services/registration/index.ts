import sequelize_instance from "../../models";
const Registration = sequelize_instance.models.Registration;
import {generateUUID} from '../../funct/generateId' 
class RegistrationService {
    async create(data: any) {
        try {
            const registration = await Registration.create(
               { ...data, id: generateUUID()}
            );
            return registration
        } catch (error) {
            return error;
        }
    }
    async update(data: any, id: string) {
        try {
            const registration = await Registration.update(data, {
                where: {
                    id: id
                }
            });
            return registration;
        } catch (error) {
            return error;
        }
    }
    async fetch(id: string) {
        try {
            const registration = await Registration.findByPk(id);
            return registration;
        } catch (error) {
            return error;
        }
    }
    async fetchAll(data: any) {
        try {
            const registration = await Registration.findAll(
                {
                    where: data
                }
            );
            return registration;
        } catch (error) {
            return error;
        }
    }

    async delete(id: string) {
        try {
            const registration = await Registration.destroy(
                {
                    where: {
                        id
                    }
                }
            );
            return registration;
        } catch (error) {
            return error;
        }
    }

}

export default new RegistrationService();