"use client"

import { useState } from "react"
import { createOrder } from "@/actions/order.action"
import Form from "next/form"

// Component ฟอร์มสำหรับสร้าง Order
export default function RegisterForm() {
  const [message, setMessage] = useState("") // เก็บข้อความแสดงผล

  // ฟังก์ชันจัดการเมื่อผู้ใช้ส่งฟอร์ม
  const handleSubmit = async (formData: FormData) => {
    const total = formData.get("total") as string // ดึงข้อมูล total จากฟอร์ม

    // เรียก action เพื่อสร้าง Order
    const result = await createOrder({ total: parseFloat(total) })

    // แสดงข้อความตามผลลัพธ์
    if (result.error) {
      setMessage(`Error: ${result.error}`) // ถ้ามี error
    } else {
      setMessage(`Order created successfully! ID: ${result.data?.id}`) // ถ้าสำเร็จ
    }
  }

  return (
    <Form action={handleSubmit} className="text-black">
      <input type="text" name="total" placeholder="total" />
      <button className="text-white">Submit</button>
      {message && (
        <p className="text-white">{message}</p>
      )}
    </Form>
  )
}