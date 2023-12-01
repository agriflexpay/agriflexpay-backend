import { Express } from "express"
import { requireUser } from "../middleware/requireUser"
import { DiseasesController } from "../controllers/diseases.ctr"

const routes = (app: Express)=> {
    app.post("/diseases", requireUser, DiseasesController.create)
    app.put("/diseases/:id", requireUser, DiseasesController.update)
    app.get("/diseases/:id", requireUser, DiseasesController.fetch)
    app.get("/diseases", requireUser, DiseasesController.fetchAll)
    app.delete("/diseases/:id", requireUser, DiseasesController.delete)
}

export default routes