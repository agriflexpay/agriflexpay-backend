import { Sequelize,DataTypes,Model } from "sequelize";

const guaranter=(sequelize: Sequelize) => {
    class Guaranter extends Model{
        public id?: string
        public fname?: string
        public lname?: string
        public email?: string
        public national_id?: number
        public krapin?: string
        public address_id?: string
        public user_id?: string
        public createdAt?: Date
        public updatedAt?: Date
    }
    Guaranter.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        fname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        national_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        krapin:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Address",
                key: "id",
            },
        },
        user_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "User",
                key: "id",
            },
        }
    },{
        sequelize,
        modelName: "Guaranter",
        freezeTableName: true,
        tableName: "Guaranter"
    })
return Guaranter
}

export default guaranter