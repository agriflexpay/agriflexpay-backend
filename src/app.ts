import express, { NextFunction } from 'express'
import dotenv from 'dotenv'
import { Request,Response } from 'express'
import  sequelize_instance from './models/index'
import  logger  from './funct/logger'
import {deserializeUser} from './middleware/deserializeUser'
import userRoutes from './routes/user.'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(deserializeUser)
const sequelize_auth = async (req: Request, res:Response, next: NextFunction) => {
  try {
    await sequelize_instance.authenticate().then(() => {
      sequelize_instance.sync().then(() => {
        console.log('Database Connected')
        next()
      }
      )
    }).catch((err) => {
      console.log(err)
    }
    )  
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

app.use(sequelize_auth)


app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
  userRoutes(app)

})