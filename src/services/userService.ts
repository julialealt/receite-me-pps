import AsyncStorage from "@react-native-async-storage/async-storage"
import { axiosInstance } from "../lib/axios"

const USER_SERVICE_BASE_URL = '/usuarios'

export const userService = {
  sendEmailToResetPassword: async (email: string) => {
    try {
      await axiosInstance.get(`${USER_SERVICE_BASE_URL}/request_reset/${email}`)
      return true
    } catch (error) {
      console.error("Erro ao enviar email para redefinir senha: ", error)
      throw error
    }
  },

  resetPassword: async (email: string, code: string, newPassword: string) => {
    try {
      await axiosInstance.post(`${USER_SERVICE_BASE_URL}/reset`, {
        email,
        codigo: code,
        novaSenha: newPassword
      })
    } catch (error) {
      console.error("Erro ao redefinir senha: ", error)
      throw error
    }
  },

  updateUserProfile: async (id: number, nome: string, bio: string, email: string, senha: string, avatar: any) => {
    try {
      const token = await AsyncStorage.getItem('@token')
      await axiosInstance.patch(`${USER_SERVICE_BASE_URL}/update`, {
        id,
        nome,
        bio,
        email,
        senha,
        avatar,
        cargo: "USER"
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
    } catch (error) {
      console.error("Erro ao atualizar perfil do usuário: ", error)
      throw error
    }
  },

  updateUserPassword: async (email: string, novaSenha: string) => {
    try {
      const token = await AsyncStorage.getItem('@token')
      await axiosInstance.post(`${USER_SERVICE_BASE_URL}/resetWithoutCode`, {
        email,
        novaSenha,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
    } catch (error) {
      console.error('Ocorreu um erro ao atualizar o usuário:', error)
    }
  },

  deleteUserAccount: async (userId: number) => {
    try {
      const token = await AsyncStorage.getItem('@token')
      await axiosInstance.delete(`${USER_SERVICE_BASE_URL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error('Erro ao excluir conta do usuário:', error)
      throw error
    }
  },
}
