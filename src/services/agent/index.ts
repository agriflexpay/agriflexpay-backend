
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

    static async getAllAgents({agency_uuid}: {agency_uuid: string}) {
        try {
            const Agents = await Agent.findAll(
                {
                    where: {
                        agency_uuid: agency_uuid
                    },
                    include: [user as any]
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

    static async deleteAgent({agent_uuid}:{agent_uuid:string}) {
        try {
            const _transaction = await sequelize_instance.transaction()
            const agent=  await Agent.findByPk(
                agent_uuid,
                {
                    transaction: _transaction
                }
            )
            const update_user = await user.update({
                role: "4"
            },
                {
                    where: {
                        id: agent?.dataValues?.user_uuid
                    },
                    transaction: _transaction
                }
            )
            if(update_user){

            const agent = await Agent.destroy({
                where: {
                    id: agent_uuid
                },
                transaction: _transaction
            })
            _transaction.commit()
            return agent
            }
            _transaction.rollback()
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