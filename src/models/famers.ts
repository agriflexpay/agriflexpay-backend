import { Sequelize , Model, DataTypes} from "sequelize"
import {connection }from "../config/config"
import user from "./user"
import agency from "./angency"
import agent from "./agent"
import plan from "./businesplan"

const userModel = user(connection)
const agencyModel = agency(connection)
const agentModel = agent(connection)
const planModel = plan(connection)
const famer=(sequelize: Sequelize) => {
    class Famer extends Model {
        public id?: string
        public user_uuid?: string
        public agent_uuid?: string
        public agency_uuid?: string
        public plan_uuid?: string   
        public createdAt?: Date
        public updatedAt?: Date
    }

    Famer.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        agent_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        agency_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        plan_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        
    },
     {
        sequelize,
        tableName: 'farmers',
        timestamps: true
    })
    Famer.belongsTo(userModel,{foreignKey:"user_uuid"})
    Famer.belongsTo(agencyModel,{foreignKey:"agency_uuid"})
    Famer.belongsTo(agentModel,{foreignKey:"agent_uuid"})
    Famer.belongsTo(planModel,{foreignKey:"plan_uuid"})

return Famer
}
export default famer