'use strict';
import { readdirSync } from 'fs';
import path, { join } from 'path';
import {Sequelize,DataTypes} from 'sequelize';
import { env as _env } from 'process';
const basename = path.basename(__filename);
import {config} from '../config/config'
//Edit this file to change the database connection
export const sequelize_instance = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    dialect: 'postgres',
    host:config.development.host,
    dialectOptions:{
      socketPath:config.development.socketPath
      }
  }
  );


export const db = {
 sequelize_instance,
};
readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    console.log(file)
    const modelModule = require(join(__dirname, file));
    const obj = modelModule.default;
    const model = obj(sequelize_instance, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default sequelize_instance;
