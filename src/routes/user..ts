import { Express } from "express"
import { userSchemas } from "../schema/user.schema"
import validate  from "../middleware/validate"
import UserController from "../controllers/user"
import { requireUser } from "../middleware/requireUser"
import { storage } from "../funct/multer";
import multer from "multer";
const upload = multer({ storage });
const routes = (app: Express) => {
    app.post('/api/user/register', validate(userSchemas.register),UserController.register)
    app.post('/api/user/login', validate(userSchemas.login), UserController.login)
    app.get('/api/user/fetchOne/:id',requireUser, UserController.getuser)
    app.get('/api/user/fetchAll',requireUser,UserController.fetchAllUsers)
    app.put('/api/user/update/:id',requireUser,UserController.update)
    app.delete('/api/user/delete/:id',requireUser,UserController.delete)
    app.post(`/api/user/upload/avatar/`, requireUser, upload.single('image'), UserController.uploadAvatar);

}

export default routes