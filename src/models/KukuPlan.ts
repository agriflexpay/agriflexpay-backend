import { Sequelize,DataTypes, Model  } from "sequelize";

const kukuplan  = (sequelize: Sequelize) => {
     class KukuPlan extends Model {
        public id?: string
        public name?: string
        public description?: string
        public amount?: number
        public duration?: number
        public interest_rate?: number
        public vendor_id?: string
        public createdAt?: Date
        public updatedAt?: Date
        public type?:[]
        public puporse?: string
        public maturity?: number
        public averageEggProduction?: number
        public meatProduction?: number
        public averageWeight?: number
        public feeding?: string
        public setting?: string
        public declineinProduction?: number
        public diseaseResistance?: string
        
    }
    
    KukuPlan.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        duration: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        interest_rate: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        vendor_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Agency",
                key: "id",
            },
        },
        type:{
            type: DataTypes.JSONB,
            allowNull: false,
        },
        puporse:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        maturity:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        averageEggProduction:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        meatProduction:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        averageWeight:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        feeding:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        setting:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        declineinProduction:{
            type:DataTypes.DECIMAL,
            allowNull: false,
        },
        diseaseResistance:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        }


}, {
    sequelize: sequelize,
    modelName: "KukuPlan",
    freezeTableName: true,
    tableName: "kukuPlan",
})
return KukuPlan
}

export default kukuplan