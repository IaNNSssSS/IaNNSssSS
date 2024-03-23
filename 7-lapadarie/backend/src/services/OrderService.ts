import { Order } from "@prisma/client";
import { prisma } from "../config/prisma"
import { OrderRequestDTO, OrderResponseDTO } from "../models/Order";

export class OrderService {

    async create(order: OrderRequestDTO) {
        const createdOrder: Order = await prisma.order.create({
            data: order
        })

        const orderDTO = new OrderResponseDTO(createdOrder);

        return orderDTO;
    }

    async getAll() {
        const orders: Order[] = await prisma.order.findMany({});
        let ordersDTO: OrderResponseDTO[] = [];

        for (let order of orders) {
            ordersDTO.push(new OrderResponseDTO(order));
        }

        return ordersDTO;
    }

    async update(order : OrderRequestDTO, id: number) {
        const updatedOrder: Order = await prisma.order.update({
            where: {
                id: id
            },
            data: order
        });

        return updatedOrder;
    }

    async delete(id: number) {
        const deletedOrder: Order = await prisma.order.delete({
            where: {
                id: id
            }
        })
        return deletedOrder;
    }
}
