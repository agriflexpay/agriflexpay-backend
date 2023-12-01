import e, { Express } from "express";
import BusinessPlanController from "../controllers/businessplan.ctr";
import { requireUser } from "@/middleware/requireUser";
import { businessPlanSchema } from "@/schema/business.plan.schema";
import validate from "../middleware/validate";

const routes = (app: Express) => {
    app.post('/api/businessplan/create', requireUser, validate(businessPlanSchema), BusinessPlanController.create)
    app.put('/api/businessplan/update/:id', requireUser, BusinessPlanController.update)
    app.get('/api/businessplan/:id',requireUser, BusinessPlanController.fetch)
    app.get('/api/businessplan',requireUser, BusinessPlanController.fetchAll)
    app.delete('/api/businessplan/:id', requireUser, BusinessPlanController.delete)
}

export default routes;