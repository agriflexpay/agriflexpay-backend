import { Express } from "express";
import AgencyController from "../controllers/agency.ctr";
import { requireUser } from "../middleware/requireUser";
import { agencySchema } from "../schema/agency.schema"
import validate from "../middleware/validate";


const routes = (app: Express) => {
    app.post('/api/agency/create',requireUser, validate(agencySchema), AgencyController.create)
    app.put('/api/agency/update/:id',requireUser, AgencyController.update)
    app.get('/api/agency/:id',requireUser, AgencyController.fetch)
    app.get('/api/agency',requireUser, AgencyController.fetchAll)
    app.delete('/api/agency/:id',requireUser, AgencyController.delete)
}
export default routes;