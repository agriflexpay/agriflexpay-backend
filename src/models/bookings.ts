import { Sequelize,DataTypes,Model  } from "sequelize";
import plan from './businesplan'
import user from "./user"
import {connection }from "../config/config"

const userModel = user(connection)
const planModel = plan(connection)
const bookings=(sequelize: Sequelize) => {
    
    class Bookings extends Model{
        public id?: string
        public user_id?: string
        public plan_uuid?: string
        public vendor_uuid?: string
        public createdAt?: Date
        public updatedAt?: Date
    }

    Bookings.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Famer",
                key: "id",
            },
        },
        plan_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Plan",
                key: "id",
            },
        },
        vendor_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Agency",
                key: "id",
            },
        },
        
    },{
        sequelize,
        modelName:"Bookings",
        tableName:"Bookings",
        timestamps: true
    })

    Bookings.hasOne(userModel,{foreignKey:"id"})
    Bookings.hasOne(planModel,{foreignKey:"id"})
    return Bookings
}
export default bookings