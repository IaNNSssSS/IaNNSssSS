import { Request, Response } from "express"
import { OrderService } from "../services/OrderService"
import { OrderRequestDTO } from "../models/Order"

const orderService = new OrderService()

export const orderController = {
    async create(req: Request, res: Response) {
        const reqOrder: OrderRequestDTO = req.body

        try {
            const orderDTO = await orderService.create(reqOrder);
            return res.json(orderDTO)
        } catch (e: any) {
            return res.json(e.message)
        }
    },
    async get(req: Request, res: Response) {
        const ordersDTO = await orderService.getAll();
        console.log(ordersDTO)
        return res.json(ordersDTO)
    },
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const reqOrder: OrderRequestDTO = req.body

        try {
            console.log(reqOrder)
            const orderDTO = await orderService.update(reqOrder, Number(id));
            return res.json(orderDTO)
        } catch (e: any) {
                return res.json(e.message)
            }
        },
    async delete(req: Request, res: Response) {
        const id = req.params.id
    
        try {
            const orderDTO = await orderService.delete(Number(id))
            return res.json(orderDTO)
        } catch (e: any) {
                return res.json(e.message)
        }
    
    },

    


}