import bcrypt from "bcrypt"

interface PasswordService {
  hashPassword(password: string): Promise<string>
  verifyPassword(password: string, hashPassword: string): Promise<boolean>
}

export const createPasswordService = (): PasswordService => ({
  hashPassword: async (password: string) => {
    return await bcrypt.hashSync(password, 10)
  },
  verifyPassword: async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword)
  }
})