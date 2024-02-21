import e, { Express } from "express";
import BusinessPlanController from "../controllers/businessplan.ctr";
import { requireUser } from "../middleware/requireUser";
import {businessPlanSchemas } from "../schema/business.plan.schema";
import validate from "../middleware/validate";
const api ="/api/businessplan/"
const routes = (app: Express) => {
    app.post(`${api}create`, requireUser, validate(businessPlanSchemas.businessPlanSchema), BusinessPlanController.create)
    app.get(`${api}:id`,requireUser,validate(businessPlanSchemas.params), BusinessPlanController.fetch)
    app.get(`${api}all`,requireUser, BusinessPlanController.fetchAll)
    app.get(`${api}plan/:plan_uuid`,requireUser,validate(businessPlanSchemas.fetchByPlanSchema), BusinessPlanController.fetchByPlan)
    app.delete(`${api}:id`, requireUser,validate(businessPlanSchemas.deleteBusinessPlanSchema), BusinessPlanController.delete)
    app.get(`${api}agency/:agency_uuid`,requireUser,validate(businessPlanSchemas.fetchByAgencySchema), BusinessPlanController.fetchByAgency)
}

export default routes;