import { Sequelize, Model, DataTypes } from "sequelize"

const registrationRequest = (sequelize: Sequelize) => {
    class Registration extends Model {
        id!: string
        firstName?: string
        lastName?: string
        email?: string
        nationalId?: string
        phoneNumber?: string
        address_id?: string
        agency_uuid?: string
        createdAt!: Date
        updatedAt!: Date
    }
    Registration.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nationalId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        agency_uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            references: {
                model: 'Agency',
                key: 'id'
            }
        },
        address_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            references: {
                model: 'Address',
                key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        sequelize,
        modelName: 'Registration',
        freezeTableName: true,
        timestamps: true
    })

    return Registration
}

export default registrationRequest