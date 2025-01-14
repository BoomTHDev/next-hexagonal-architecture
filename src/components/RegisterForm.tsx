"use client"

import { useActionState } from "react"
import Form from "next/form"

export default function RegisterForm() {

  return (
    <Form action="" className="text-black">
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="password" name="confirmPassword" placeholder="confirmPassword" />
      <button type="submit">Submit</button>
    </Form>
  )
}