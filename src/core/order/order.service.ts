import { Order } from "@/core/order/order" // type
import { OrderRepository } from "@/core/order/order.repo" // port

// กำหนด interface สำหรับบริการที่เกี่ยวกับ Order
interface OrderService {
  createOrder(order: Order): Promise<Order>
}

export const createOrderService = (repo: OrderRepository): OrderService => ({
  createOrder: async (order: Order) => {
    // ตรวจสอบว่าราคารวมต้องมากกว่า 0
    if (order.total <= 0) {
      throw new Error("Total must be positive") // ถ้าไม่ผ่านจะโยน error
    }
    return await repo.save(order) // บันทึก Order ผ่าน repository
  }
})