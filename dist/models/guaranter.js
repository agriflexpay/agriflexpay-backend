"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const guaranter = (sequelize) => {
    class Guaranter extends sequelize_1.Model {
    }
    Guaranter.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        fname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        national_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        krapin: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        address_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            references: {
                model: "address",
                key: "id",
            },
        },
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: "guaranter",
        tableName: "Guaranter"
    });
    return Guaranter;
};
exports.default = guaranter;
