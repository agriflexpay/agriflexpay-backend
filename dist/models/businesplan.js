"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Plan = (sequelize) => {
    class Plan extends sequelize_1.Model {
    }
    Plan.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        duration: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        interest_rate: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        vendor_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            references: {
                model: "vendor",
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
        sequelize: sequelize,
        modelName: "plan",
    });
    return Plan;
};
exports.default = Plan;
