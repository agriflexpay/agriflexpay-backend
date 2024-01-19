
import { omit } from "lodash";
import {Agent_type} from "../../types/type"
import sequelize_instance from "../../models/index";
import  {generateUUID} from "../../funct/generateId"
const Agent = sequelize_instance.models.Agent
const user = sequelize_instance.models.User
interface Agent_types extends Agent_type { }
class AgentServices {
    static async createAgent(input: Agent_types) {
        try {
            const agent = await Agent.create({
                id: generateUUID(),
                ...input
            })
            return agent
        } catch (error) {
        return error
        }
    }

    static async getAllAgents() {
        try {
            const Agents = await Agent.findAll(
                {
                    include: [{
                        all: true,
                        nested: true
                    }]
                }
            )
            return Agents
        } catch (error) {
            return error
        }
    }

    static async getOneAgent({user_uuid}:{user_uuid:string}) {
        try {
            const agent = await Agent.findOne({
                where: {
                    user_uuid:user_uuid
                },
                include: [user]
            })
            return agent
        } catch (error) {
            return error
        }
    }

    static async deleteAgent(input: Agent_types) {
        try {
            const agent = await Agent.destroy({
                where: {
                    ...input
                }
            })
            return agent
        } catch (error) {
            return error
        }
    }
}

export default AgentServices;