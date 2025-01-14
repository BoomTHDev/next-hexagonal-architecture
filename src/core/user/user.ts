export type User = {
  id: string | null
  name: string | null
  email: string
  password: string
  picture: string | null
  role: "CUSTOMER" | "ADMIN"
  status: "ACTIVE" | "BANNED"
  address: string | null
  createdAt: Date
  updatedAt: Date
}

export type CreateUserRequest = {
  name: string | null
  email: string
  password: string
  confirmPassword: string
}

export type CreateUserResponse = {
  id: string
  name: string | null
  email: string
}