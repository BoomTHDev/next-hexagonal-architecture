import { User, CreateUserRequest, CreateUserResponse } from "@/core/user/user"
import { UserRepository } from "@/core/user/user.repo"
import { createPasswordService } from "@/core/user/password.service"

const passwordService = createPasswordService()

interface UserService {
  findAllUsers(): Promise<User[]>
  findUserById(id: string): Promise<User | null>
  register(user: CreateUserRequest): Promise<CreateUserResponse> 
}

export const createUserService = (repo: UserRepository): UserService => ({
  findAllUsers: async () => {
    return await repo.getAll()
  },
  findUserById: async (id: string) => {
    return await repo.getById(id)
  },
  register: async (user: CreateUserRequest) => {
    const hashPassword = await passwordService.hashPassword(user.password)
    const newUser = await repo.createUser({
      ...user,
      password: hashPassword
    })
    const userResponse: CreateUserResponse = {
      id: newUser.id as string,
      name: newUser.name as string,
      email: newUser.email as string,
    }

    return userResponse as CreateUserResponse
  }
})