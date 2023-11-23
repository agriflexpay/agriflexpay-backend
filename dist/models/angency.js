"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Vendor = (sequelize) => {
    class Vendor extends sequelize_1.Model {
    }
    Vendor.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
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
    }, {
        sequelize: sequelize,
        modelName: "vendor",
        tableName: "vendor",
    });
    return Vendor;
};
exports.default = Vendor;
