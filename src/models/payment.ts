import { Sequelize,DataTypes,Model  } from "sequelize";


const payment=(sequelize: Sequelize) => {
    class Payment extends Model{
        public code?: string
        public amount?: number
        public paymentMode?: string
        public user_id?: string
        public plan_uuid?: string
        public vendor_uuid?: string
        public phone?: number
        public createdAt?: Date
        public updatedAt?: Date
    }

    Payment.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        code: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        paymentMode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "User",
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
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },{
        sequelize,
        modelName:"Payment",
        tableName:"Payment",
        timestamps: true
    })

    return Payment
}
export default payment