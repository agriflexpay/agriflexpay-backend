import { Sequelize,Model,DataTypes } from "sequelize";
import {connection} from "../config/config"
import user from "./user"
import agency from "./angency"
import agent from "./agent"
import famer from "./famers"

const userModel = user(connection)
const agencyModel = agency(connection)
const agentModel = agent(connection)
const famerModel = famer(connection)

const vet_doctor=(sequelize: Sequelize) => {
    class Vet_doctor extends Model {
        public id?: string
        public user_uuid?: string
        public agent_uuid?: string
        public agency_uuid?: string
        public famer_uuid?: string   
        public createdAt?: Date
        public updatedAt?: Date
    }
 
    Vet_doctor.init({
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
                key:"id"
            }
        },
        agent_uuid: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        agency_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        famer_uuid: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        
    },
     {
        sequelize,
        modelName: 'Vet_doctor',
        tableName: 'Vet_doctor',
        freezeTableName: true,
        timestamps: true
    })
    Vet_doctor.belongsTo(userModel,{foreignKey:"user_uuid"})
    Vet_doctor.belongsTo(agencyModel,{foreignKey:"agency_uuid"})
    Vet_doctor.belongsTo(agentModel,{foreignKey:"agent_uuid"})
    //how can i show a relation between vet_doctor and famer if the famer_uuid is an array

    Vet_doctor.hasMany(famerModel,{foreignKey:"famer_uuid"})

    return Vet_doctor
}
export default vet_doctor