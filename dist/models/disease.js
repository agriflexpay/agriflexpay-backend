"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const disease = (sequelize) => {
    class Diseace extends sequelize_1.Model {
    }
    Diseace.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUID,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        occurance_pattern: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        causes: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        prevention_and_control: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        transmission: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        signs_and_symptoms: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        treatment: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        victim: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
        },
        location_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        farmer_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        }
    }, {
        sequelize: sequelize,
        modelName: "disease",
        tableName: "Disease"
    });
    return Diseace;
};
exports.default = disease;
