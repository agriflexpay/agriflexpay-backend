import { Express } from "express"
import { userSchemas } from "../schema/user.schema"
import validate  from "../middleware/validate"
import UserController from "../controllers/user"
import { requireUser } from "../middleware/requireUser"
const routes = (app: Express) => {
    app.post('/api/user/register', validate(userSchemas.register),UserController.register)
    app.post('/api/user/login', validate(userSchemas.login), UserController.login)
    app.get('/api/user/fetchOne/:id',requireUser, UserController.getuser)
    app.get('/api/user/fetchAll',requireUser,UserController.fetchAllUsers)
    app.put('/api/user/update/:id',requireUser,UserController.update)
}

export default routes