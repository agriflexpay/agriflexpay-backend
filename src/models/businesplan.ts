import { Sequelize,DataTypes, Model  } from "sequelize";
import {connection} from "../config/config"
import agency from "./angency";

const agencyModel = agency(connection)

const plan  = (sequelize: Sequelize) => {
     class Plan extends Model {
        public id?: string
        public name?: string
        public description?: string
        public amount?: number
        public duration?: number
        public interest_rate?: number
        public vendor_uuid?: string
        public createdAt?: Date
        public updatedAt?: Date
    }
    
    Plan.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
        },
        
        vendor_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Agency",
                key: "id",
            },
        },
        plan_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
}, {
    sequelize: sequelize,
    modelName: "Plan",
    tableName: "Plan",
    timestamps: true,
})
Plan.belongsTo(agencyModel,{foreignKey:"vendor_uuid"})
return Plan
}

export default plan