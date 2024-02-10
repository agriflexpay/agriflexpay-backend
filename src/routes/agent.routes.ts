import { Express } from "express"
import { AgentSchema } from "../schema/agent.schema"
import validate  from "../middleware/validate"
import AgentController from "../controllers/agent.ctr"
import { requireUser } from "../middleware/requireUser"
const routes = (app: Express) => {
    app.post("/api/agent/create",requireUser,validate(AgentSchema.createAgentSchema),AgentController.createAgent)
    app.delete("/api/agent/delete/:agent_uuid",requireUser,validate(AgentSchema.deleteAgentSchema),AgentController.deleteAgent)
    app.get("/api/agent/get-all",requireUser,AgentController.getAllAgents)
    app.get("/api/agent/get-one/:user_uuid",requireUser,validate(AgentSchema.params),AgentController.getOneAgent)
    app.get("/api/agent/get-all-by-agency/:agency_uuid",requireUser,validate(AgentSchema.agencyParams),AgentController.getAllAgentsByAgency)

}

export default routes