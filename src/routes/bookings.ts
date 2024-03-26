import { Express } from "express"
import validate  from "../middleware/validate"
import { requireUser } from "../middleware/requireUser"
import BookingsControler from "../controllers/bookings"
import { Bookingschema } from "../schema/bookings"
const ApiEndPoint='/api/bookings'
const routes = (app: Express) => {
    app.post(`${ApiEndPoint}/create`,validate(Bookingschema.bookings_Schema),requireUser,BookingsControler.create)
    app.get(`${ApiEndPoint}/user/:user_uuid`,requireUser,BookingsControler.fetchByUser)
    app.get(`${ApiEndPoint}/plan/:plan_uuid`,requireUser,BookingsControler.fetchByPlan)
    app.get(`${ApiEndPoint}/vendor/:vendor_uuid`,requireUser,BookingsControler.fetchByAgency)
}

export default routes

