import { Order } from "@/core/order/order"

// กำหนด interface สำหรับการทำงานกับ Order ในฐานข้อมูล
export interface OrderRepository {
  save(order: Order): Promise<Order>
}