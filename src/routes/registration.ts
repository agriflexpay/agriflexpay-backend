import { Express } from "express";
import validate from "../middleware/validate";
import registrationSchema from "../schema/registration.schema";
import RegistrationController from "../controllers/registrationController";
import { requireUser } from "../middleware/requireUser";
const routes = (app: Express) => {
    app.post('/api/registration/create', validate(registrationSchema.Schema),RegistrationController.create)
    app.put('/api/registration/update/:id',requireUser,RegistrationController.update)
    app.get('/api/registration/:id',requireUser, RegistrationController.fetch)
    app.get('/api/registration',requireUser, RegistrationController.fetchAll)
    app.delete('/api/registration/:id',requireUser, RegistrationController.delete)
}

export default routes;
