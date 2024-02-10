import { Express } from "express"
import validate  from "../middleware/validate"
import {vetSchema} from "../schema/vet_doctors.schema"
import VetDoctorController from "../controllers/vet_docter.ctr"
import { requireUser } from "../middleware/requireUser"
const routes = (app: Express) => {
    app.post("/api/vet_doctor",requireUser,validate(vetSchema.createVetDoctorSchema),VetDoctorController.createVet_doctor)
    app.get("/api/vet_doctor",requireUser,VetDoctorController.getAllVet_doctors)
    app.get("/api/vet_doctor/one/:user_uuid",requireUser,validate(vetSchema.params),VetDoctorController.getOneVet_doctor)
    app.delete("/api/vet_doctor/:user_uuid",requireUser,validate(vetSchema.deleteVetDoctorSchema),VetDoctorController.deleteVet_doctor)
    app.put("/api/vet_doctor/addAgent",requireUser,validate(vetSchema.updateVetAddAgent),VetDoctorController.addAgent)
    app.put("/api/vet_doctor/addFarmers",requireUser,validate(vetSchema.updateVetAddFarmers),VetDoctorController.addFarmers)
}

export default routes