import  { Express } from "express";
import { createKukuSchema,params } from "../schema/kukuPlan.schema";
import { requireUser } from "../middleware/requireUser";
import  KukuPlanController from "../controllers/kukuPlanControllers";
import validate from "../middleware/validate";

const routes = (app: Express) => {
    app.post("/api/kukuplan/create", requireUser, validate(createKukuSchema), KukuPlanController.create)
    app.put("/api/kukuplan/update/:id", requireUser, validate(createKukuSchema), KukuPlanController.update)
    app.get("/api/kukuplan/fetch/:id", requireUser,validate(params), KukuPlanController.fetch)
    app.get("/api/kukuplan/fetchAll", requireUser, KukuPlanController.fetchAll)
    app.delete("/api/kukuplan/delete/:id", requireUser,validate(params), KukuPlanController.delete)

}

export default routes;