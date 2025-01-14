// db
import { prisma } from "@/lib/prisma"

// user
import { User, CreateUserRequest } from "@/core/user/user" // entity
import { UserRepository } from "@/core/user/user.repo" // port

// order
import { Order } from "@/core/order/order"
import { OrderRepository } from "@/core/order/order.repo" // port

// สร้าง repository สำหรับ Prisma User
export const createPrismaUserRepository = (): UserRepository => ({
  getAll: async () => {
    return await prisma.user.findMany()
  },
  getById: async (id: string) => {
    return await prisma.user.findUnique({
      where: { id }
    })
  },
  createUser: async (user: CreateUserRequest) => {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })

    return newUser
  }
})

// สร้าง repository สำหรับ Prisma Order
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