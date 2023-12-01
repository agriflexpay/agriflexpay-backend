import { Express } from "express"
import addressSchema from "../schema/address.schema"
import validate  from "../middleware/validate"

import AddressController from "../controllers/address.ctr"

const routes = (app: Express) => {
    app.post('/api/address/create', validate(addressSchema),AddressController.create)
    app.put('/api/address/update/:id',AddressController.update)
    app.get('/api/address/:id', AddressController.fetch)
    app.get('/api/address', AddressController.fetchAll)
    app.delete('/api/address/:id', AddressController.delete)
}
export default routes;