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
        county: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subcounty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sublocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize: sequelize,
        tableName: "Address",
        modelName: "Address",
    })

    return Address
}
export default address