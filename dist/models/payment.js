"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Payment = (sequelize) => {
    class Payment extends sequelize_1.Model {
    }
    Payment.init({
        code: {
            primaryKey: true,
            type: sequelize_1.DataTypes.STRING,
        },
        amount: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        paymentMode: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        plan_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            references: {
                model: "plan",
                key: "id",
            },
        },
        vendor_id: {
            type: sequelize_1.DataTypes.STRING,
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
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "phone",
            },
        },
        updated_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: "payment"
    });
    return Payment;
};
exports.default = Payment;
