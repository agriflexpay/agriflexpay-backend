import express, { NextFunction } from 'express'
import dotenv from 'dotenv'
import { Request,Response } from 'express'
import cors from 'cors'
import  sequelize_instance from './models/index'
import  logger  from './funct/logger'
import {deserializeUser} from './middleware/deserializeUser'
import userRoutes from './routes/user.'
import addressRoutes from './routes/address'
import guarantorRoutes from './routes/guarantor'
import businessplanroutes from './routes/businessplan'
import diseaseRoutes from './routes/diseases'
import agencyRoutes from './routes/agency'

dotenv.config()
const app = express()

const port = process.env.PORT
app.use(express.json())
app.use(deserializeUser)
app.use(express.json());
app.use(cors(
  {
    origin:[ 'http://localhost:5174','http://localhost:5173'],
    credentials: true
  }
));
const sequelize_auth = async (req: Request, res:Response, next: NextFunction) => {
  try {
    await sequelize_instance.authenticate().then(() => {
      sequelize_instance.sync().then(() => {
        logger.info('Database Connection has been established successfully.')
        next()
      }
      )
    }).catch((err) => {
      logger.error('Unable to connect to the database:', err)
    }
    )  
  } catch (error) {
    logger.error(error)
}
}

app.use(sequelize_auth)
console.log(sequelize_instance.models)
app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
  userRoutes(app)
  addressRoutes(app)
  guarantorRoutes(app)
  businessplanroutes(app)
  diseaseRoutes(app)
  agencyRoutes(app)

})