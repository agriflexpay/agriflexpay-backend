import { Sequelize,Model,DataTypes } from "sequelize";
import {connection} from "../config/config"
import user from "./user"
import agency from "./angency"


const userModel = user(connection)
const agencyModel = agency(connection)

const agent=(sequelize: Sequelize) => {
    class Agent extends Model {
        public id?: string
        public user_uuid?: string
        public agency_uuid?: string
        public createdAt?: Date
        public updatedAt?: Date
    }

    Agent.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        agency_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        
    },
     {
        sequelize,
        tableName: 'agents',
        timestamps: true
    })
    Agent.belongsTo(userModel,{foreignKey:"user_uuid"})
    Agent.belongsTo(agencyModel,{foreignKey:"agency_uuid"})
    return Agent
}
export default agent