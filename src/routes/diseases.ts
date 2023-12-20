import { Express } from "express"
import { requireUser } from "../middleware/requireUser"
import { DiseasesController } from "../controllers/diseases.ctr"
import diseaseSchema, { updateCauses, updateNameAndOccurancePattern, updatePreventionAndControl, updateSignsAndSymptoms, updateTransmission, updateTreatment, updateVictim } from "../schema/diseases.schema"
import validate from "../middleware/validate"
const routes = (app: Express)=> {
    app.post("/api/diseases", requireUser,validate(diseaseSchema), DiseasesController.create)
    app.put("/api/diseases/nameAndpattern/:id", requireUser,validate(updateNameAndOccurancePattern), DiseasesController.nameAndpattern)
    app.put("/api/diseases/causes/:id", requireUser,validate(updateCauses), DiseasesController.updateCauses)
    app.put("/api/diseases/prevention/:id", requireUser,validate(updatePreventionAndControl), DiseasesController.updatePrevention)
    app.put("/api/diseases/transmission/:id", requireUser,validate(updateTransmission), DiseasesController.updateTransmission)
    app.put("/api/diseases/signsAndSymptoms/:id", requireUser,validate(updateSignsAndSymptoms), DiseasesController.updateSignsAndSymptoms)
    app.put("/api/diseases/treatment/:id", requireUser,validate(updateTreatment), DiseasesController.updateTreatment)
    app.put("/api/diseases/victims/:id", requireUser,validate(updateVictim), DiseasesController.updateVictims)
    app.get("/api/diseases/:id", requireUser, DiseasesController.fetch)
    app.get("/api/diseases", requireUser, DiseasesController.fetchAll)
    app.delete("/api/diseases/:id", requireUser, DiseasesController.delete)
}

export default routes