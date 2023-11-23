import { Sequelize, DataTypes, Model} from "sequelize";

const Vendor = (sequelize: Sequelize) => {
    class Vendor extends Model {
        public id?: string
        public name?: string
        public email?: string
        public description?: string
        public phone?: number
        public address_id?: string
        public createdAt?: Date
        public updatedAt?: Date
    }

    Vendor.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "address",
                key: "id",
            },
        },
    }, {
        sequelize:sequelize,
        modelName: "vendor",
        tableName: "vendor",
    })
    return Vendor
}

export default Vendor