import { Sequelize, Model, DataTypes } from "sequelize"

const disease = (sequelize: Sequelize) => {
    class Diseace extends Model {
        public id?: string
        public name?: string
        public occurance_pattern?: string
        public causes?: [string]
        public prevention_and_control?: [string]
        public transmission?: [string]
        public signs_and_symptoms?: [string]
        public treatment?: [string]
        public victim?: [string]
        public location_id?: string
        public farmer_id?: string
        public createdAt?: Date
        public updatedAt?: Date
    }
    Diseace.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        occurance_pattern: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        causes: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        prevention_and_control: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        transmission: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        signs_and_symptoms: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        treatment: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        victim: {
            type: DataTypes.JSONB,//affected animals or plants 
            allowNull: false,
        },
        location_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Address',
                key: 'id'
            }
        },
        farmer_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        {
            sequelize: sequelize,
            modelName: "Disease",
            freezeTableName: true,
            tableName: "Disease"
        }
    )
    return Diseace
}
export default disease