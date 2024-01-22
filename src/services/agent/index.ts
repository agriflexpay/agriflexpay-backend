
import { omit } from "lodash";
import { Agent_type } from "../../types/type"
import sequelize_instance from "../../models/index";
import { generateUUID } from "../../funct/generateId"
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
            const reslt = Agents.map((agent: any) => {
                const user = agent.dataValues.User.dataValues
                const _user = omit(user, filter)
                agent.dataValues.User.dataValues = _user
                return agent;
            })
            return reslt

        } catch (error) {
            return error
        }
    }
    static async getAllAgentsByAgency({ agency_uuid }: { agency_uuid: string }) {
        try {
            const Agents = await Agent.findAll(
                {
                    where: {
                        agency_uuid: agency_uuid
                    },
                    include: [{
                        all: true,
                        nested: true
                    }]
                }
            )
            const reslt = Agents.map((agent: any) => {
                const user = agent.dataValues.User.dataValues
                const _user = omit(user, filter)
                agent.dataValues.User.dataValues = _user
                return agent;
            })
            return reslt

        } catch (error) {
            return error
        }
    }
    static async getOneAgent({ user_uuid }: { user_uuid: string }) {
        try {
            const agent = await Agent.findAll({
                where: {
                    user_uuid: user_uuid
                },
                include: [user]
            })
            if (agent) {
                const reslt = agent.map((agent: any) => {
                    const user = agent.dataValues.User.dataValues
                    const _user = omit(user, filter)
                    agent.dataValues.User.dataValues = _user
                    return agent;
                })
                return reslt
            }

        } catch (error) {
            return error
        }
    }

    static async deleteAgent({ user_uuid, agency_uuid }: { user_uuid: string, agency_uuid: string }) {
        try {
            const agent = await Agent.destroy({
                where: {
                    user_uuid: user_uuid,
                    agency_uuid: agency_uuid
                }
            })
            return agent
        } catch (error) {
            return error
        }
    }
}
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


export default AgentServices;