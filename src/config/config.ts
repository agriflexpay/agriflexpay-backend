import dotenv from 'dotenv';
import { Dialect,Sequelize } from 'sequelize';
dotenv.config();
 export const config= {
"development": 
{
  "username": process.env.DB_USER || '',
  "password": process.env.DB_PASSWORD || '',
  "database": process.env.DB_NAME || '',
  "host": process.env.DB_HOST,
  "Dialect":  'mariadb' as Dialect,
  "socketPath":`${process.env.SOCKETPATH}`
  
},
"test":{
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
 "Dialect":  'mariadb' as Dialect,
  "socketPath":`${process.env.SOCKETPATH}`
},
"production": {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
 "Dialect":  'mariadb' as Dialect,
  "socketPath":`${process.env.SOCKETPATH}`
}
}
export const connection = new Sequelize(
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
