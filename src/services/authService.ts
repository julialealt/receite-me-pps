import { axiosInstance } from "../lib/axios"
import type { SignUpData } from "../types"

const AUTH_SERVICE_BASE_URL = '/auth'

export const authService = {
  signUp: async (userData: SignUpData) => {
    try {
      const response = await axiosInstance.post(`${AUTH_SERVICE_BASE_URL}/create`, {
        ...userData,
        avatar: "1",
      })
      
      return response
    } catch (error) {
      console.error('Erro ao criar conta:', error)
      throw error
    }
  },

  signIn: async (email: string, senha: string) => {
    try {
      const response = await axiosInstance.post(`${AUTH_SERVICE_BASE_URL}/authenticate`, {
        email,
        senha,
      })
      
      return response
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw error
    }
  },

  passwordConfirmation: async (email: string, senha: string) => {
    try {
      const response = await axiosInstance.post(`${AUTH_SERVICE_BASE_URL}/passwordConfirmation`, {
        email,
        senha,
      })
      
      return response
    } catch (error) {
      console.error('Erro ao confirmar senha:', error)
      throw error
    }
  },
}
