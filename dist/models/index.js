'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.sequelize_instance = void 0;
const fs_1 = require("fs");
const path_1 = __importStar(require("path"));
const sequelize_1 = require("sequelize");
const basename = path_1.default.basename(__filename);
const config_1 = require("../config/config");
//Edit this file to change the database connection
exports.sequelize_instance = new sequelize_1.Sequelize(config_1.config.development.database, config_1.config.development.username, config_1.config.development.password, {
    dialect: 'postgres',
    host: config_1.config.development.host,
    dialectOptions: {
        socketPath: config_1.config.development.socketPath
    }
});
exports.db = {
    sequelize_instance: exports.sequelize_instance,
};
(0, fs_1.readdirSync)(__dirname)
    .filter(file => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1);
})
    .forEach(file => {
    const modelModule = require((0, path_1.join)(__dirname, file));
    const obj = modelModule.default;
    const model = obj(exports.sequelize_instance);
    console.log(model);
    exports.db[model.name] = model;
});
Object.keys(exports.db).forEach(modelName => {
    if (exports.db[modelName].associate) {
        exports.db[modelName].associate(exports.db);
    }
});
exports.default = exports.sequelize_instance;
