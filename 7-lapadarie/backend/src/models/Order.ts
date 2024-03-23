import { Order } from "@prisma/client"

export type OrderRequestDTO = {
    nome: string,
    qtdPaes: number,
    statusPedido: boolean,
}

export class OrderResponseDTO {
    id: number
    nome: string
    qtdPaes: number
    statusPedido: boolean
    

    constructor(order: Order) {
        this.id = order.id
        this.nome = order.nome
        this.qtdPaes = order.qtdPaes
        this.statusPedido = order.statusPedido
    }
}
