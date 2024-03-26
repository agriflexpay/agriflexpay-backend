import { Express } from "express"
import validate  from "../middleware/validate"
import { requireUser } from "../middleware/requireUser"

import { Bookingschema } from "../schema/bookings"
const ApiEndPoint='/api/bookings'
const routes = (app: Express) => {
    app.post(`${ApiEndPoint}/create`,validate(Bookingschema.bookings_Schema),requireUser,)
    app.get(`${ApiEndPoint}/user/:user_uuid`,requireUser,)
    app.get(`${ApiEndPoint}/plan/:plan_uuid`,requireUser,)
    app.get(`${ApiEndPoint}/vendor/:vendor_uuid`,requireUser,)
}

export default routes

