import { Request, Response, response } from "express";
import AgentServices  from "../services/agent/index";
import ResponseService from "../funct/responce"

class AgentController {
   static async createAgent(req: Request, res: Response) {
        try {
            const { user_uuid, agency_uuid} = req.body
            const input = {
                user_uuid,
                agency_uuid,
            }
            const Agent = await AgentServices.createAgent(input)
            if (Agent) {
                return ResponseService.success({res,data:Agent})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getAllAgents(req: Request, res: Response) {
        try {
            const agency_uuid = res?.locals?.user?.agency_uuid;
            const Agents = await AgentServices.getAllAgents(
                {agency_uuid: agency_uuid}
            )
            if (Agents) {
                return ResponseService.success({res,data:Agents})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getAllAgentsByAgency(req: Request, res: Response) {
        try {
            const { agency_uuid } = req.params
            const Agents = await AgentServices.getAllAgentsByAgency({agency_uuid:agency_uuid})
            if (Agents) {
                return ResponseService.success({res,data:Agents})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async getOneAgent(req: Request, res: Response) {
        try {
            const  user_uuid  = req.params?.user_uuid
            const Agent = await AgentServices.getOneAgent({user_uuid:user_uuid})
            if (Agent) {
                return ResponseService.success({res,data:Agent})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
    static async deleteAgent(req: Request, res: Response) {
        try {
            const { user_uuid, agency_uuid } = req.body
            const Agent = await AgentServices.deleteAgent({user_uuid:user_uuid,agency_uuid:agency_uuid})
            if (Agent) {
                return ResponseService.success({res,data:Agent})
            }
        } catch (error) {
            return ResponseService.error({res,error})
        }
    }
}

export default AgentController;