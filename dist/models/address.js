"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const address = (sequelize) => {
    class Address extends sequelize_1.Model {
    }
    Address.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        county: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        subcounty: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        sublocation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
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
        sequelize: sequelize,
        tableName: "address"
    });
    return Address;
};
exports.default = address;
