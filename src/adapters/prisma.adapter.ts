import { prisma } from "@/lib/prisma"
import { Order } from "@/core/order/order"
import { OrderRepository } from "@/core/order/order.repo" // port

// สร้าง repository สำหรับ Prisma
export const createPrismaOrderRepository = (): OrderRepository => ({
  save: async (order: Order) => {
    // บันทึกข้อมูล Order ลงฐานข้อมูล
    const saveOrder = await prisma.order.create({
      data: {
        total: order.total // บันทึกเฉพาะราคารวม
      }
    })

    return saveOrder // ส่งข้อมูล Order ที่บันทึกกลับไป
  }
})