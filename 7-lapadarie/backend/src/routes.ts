import { Router } from 'express'
import { orderController } from './controllers/OrderControllers'

export const routes = Router()

routes.post("/order", orderController.create)
routes.get("/order", orderController.get)
routes.put("/order/:id", orderController.update)
routes.delete("/order/:id", orderController.delete)
