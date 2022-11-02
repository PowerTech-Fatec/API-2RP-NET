import { Router } from "express"
import SobreAvisoController from "../controllers/SobreAvisoController"

const routes = Router()

routes.get('/getAll', SobreAvisoController.list)
routes.get('/getById', SobreAvisoController.findById)
// routes.get('/getByUserId', SobreAvisoController.getByUserId)
routes.post('/create', SobreAvisoController.create)
routes.put('/update', SobreAvisoController.update)
routes.delete('/delete', SobreAvisoController.delete)

export default routes