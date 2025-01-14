"use server"

import { createOrderService } from "@/core/order/order.service"
import { createPrismaOrderRepository } from "@/adapters/prisma.adapter"
import { Order } from "@/core/order/order"

// สร้าง instance ของ repository และ service
const orderRepo = createPrismaOrderRepository()
const orderService = createOrderService(orderRepo)

// ฟังก์ชันสำหรับสร้าง Order (เรียกจาก client)
export const createOrder = async (order: Order) => {
  try {
    // เรียกใช้ service เพื่อสร้าง Order
    const newOrder = await orderService.createOrder(order)
    return {
      data: newOrder, // ส่งข้อมูล Order กลับ
      error: null // ไม่มี error
    }
  } catch (error) {
    return {
      data: null, // ไม่มีข้อมูล
      error: error instanceof Error ? error.message : "Unknown error occurred" // ส่งข้อความ error
    }
  }
}