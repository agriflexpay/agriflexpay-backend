import { Express } from "express";
import { GuarantorController } from "../controllers/guarantor.ctr"
import { requireUser } from "../middleware/requireUser"
import { GuarantorSchema } from "../schema/guaranter.schema";
import validate from "../middleware/validate";
const routes = (app: Express) => {
    app.post("/guarantor", validate(GuarantorSchema), requireUser, GuarantorController.create);
    app.get("/guarantor", requireUser,GuarantorController.getAll);
    app.get("/guarantor/:id",requireUser, GuarantorController.get);
    app.put("/guarantor/:id", validate(GuarantorSchema), requireUser, GuarantorController.update);
    app.delete("/guarantor/:id", requireUser, GuarantorController.delete);
}

export default routes;