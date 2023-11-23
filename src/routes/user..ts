import { Express } from "express"
import { userSchema } from "../schema/user.schema"
import validate  from "../middleware/validate"
import UserController from "../controllers/user"
const routes = (app: Express) => {
    app.post('/api/user/register', validate(userSchema),UserController.register)
    app.post('/api/user/login', UserController.login)
    app.get('/api/user/:id', UserController.getuser)
    app.put('/api/user/fetchAll',UserController.fetchAll)
    app.put('/api/user/update/:id',UserController.update)
}

export default routes;