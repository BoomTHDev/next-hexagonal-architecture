import { User, CreateUserRequest } from "@/core/user/user"

export interface UserRepository {
  getAll(): Promise<User[]>
  getById(id: string): Promise<User | null>
  createUser(user: CreateUserRequest): Promise<User>
}