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
    class Farmer extends Model {
        public id?: string
        public user_uuid?: string
        public agent_uuid?: string
        public agency_uuid?: string
        public plan_uuid?: string   
        public createdAt?: Date
        public updatedAt?: Date
    }

    Farmer.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique:true,
            references:{
                model:"User",
                key:"id",
            },
            
        },
        agent_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model:"Agent",
                key:"id"
            }
        },
        agency_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model:"Agency",
                key:"id"
            }
        },
        plan_uuid: {
            type: DataTypes.UUID,
            allowNull: true,
            references:{
                model:"Plan",
                key:"id"
            }
        },
        
    },
     {
        sequelize,
        modelName: 'Farmer',
        tableName: 'Farmer',
        timestamps: true
    })
    Farmer.belongsTo(userModel,{foreignKey:"user_uuid"})
    Farmer.belongsTo(agencyModel,{foreignKey:"agency_uuid"})
    Farmer.belongsTo(agentModel,{foreignKey:"agent_uuid"})
    Farmer.belongsTo(planModel,{foreignKey:"plan_uuid"})

return Farmer
}
export default famer