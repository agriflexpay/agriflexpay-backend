import e, { Express } from "express";
import BusinessPlanController from "../controllers/businessplan.ctr";
import { requireUser } from "../middleware/requireUser";
import {businessPlanSchemas } from "../schema/business.plan.schema";
import validate from "../middleware/validate";

const routes = (app: Express) => {
    app.post('/api/businessplan/create', requireUser, validate(businessPlanSchemas.businessPlanSchema), BusinessPlanController.create)
    app.get('/api/businessplan/:id',requireUser,validate(businessPlanSchemas.params), BusinessPlanController.fetch)
    app.get('/api/businessplan/all',requireUser, BusinessPlanController.fetchAll)
    app.delete('/api/businessplan', requireUser,validate(businessPlanSchemas.deleteBusinessPlanSchema), BusinessPlanController.delete)
    app.get('/api/businessplan/agency/:agency_uuid',requireUser,validate(businessPlanSchemas.fetchByAgencySchema), BusinessPlanController.fetchByAgency)
}

export default routes;