import { Sequelize ,Model, DataTypes,} from "sequelize"

const address=(sequelize: Sequelize) => {
    class Address extends Model{
        public id?: string
        public county?: string
        public subcounty?: string
        public location?: string
        public sublocation?: string
        public phone?: number
        public createdAt?: Date
        public updatedAt?: Date
    }

    Address.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sub_county: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ward:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sub_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        village:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize: sequelize,
        tableName: "Address",
        freezeTableName: true,
        modelName: "Address",
    })

    return Address
}
export default address