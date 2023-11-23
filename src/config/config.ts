import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
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

