"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const password_1 = require("../funct/password");
const sequelize_typescript_1 = require("sequelize-typescript");
const user = (sequelize) => {
    class User extends sequelize_1.Model {
        static hashPassword(instance) {
            return __awaiter(this, void 0, void 0, function* () {
                const password = instance.dataValues.password;
                instance.password = yield (0, password_1.hashPassword)({ password });
            });
        }
    }
    __decorate([
        sequelize_typescript_1.BeforeCreate,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User]),
        __metadata("design:returntype", Promise)
    ], User, "hashPassword", null);
    User.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
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
        password: {
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
        role: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        reset_token: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        reset_token_expires: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        is_active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_account_verified: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        verification_token: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        verification_token_expires: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        latitude: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        longitude: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: "user",
        tableName: "User",
    });
    return User;
};
exports.default = user;
