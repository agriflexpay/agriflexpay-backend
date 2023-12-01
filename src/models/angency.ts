import { Sequelize, DataTypes, Model} from "sequelize";

const agency = (sequelize: Sequelize) => {
    class Agency extends Model {
        public id?: string
        public name?: string
        public email?: string
        public description?: string
        public phone?: number
        public address_id?: string
        public createdAt?: Date
        public updatedAt?: Date
    }

    Agency.init({
        id: {
            type: DataTypes.UUID,
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
        modelName: "agency",
        tableName: "Agency",
    })
    return Agency
}

export default agency