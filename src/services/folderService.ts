import AsyncStorage from "@react-native-async-storage/async-storage"
import { axiosInstance } from "../lib/axios"
import type { PastaDto } from "../dtos/PastaDto"
import type { ReceitaDto } from "../dtos/ReceitaDto"

const FOLDER_SERVICE_BASE_URL = '/pastas'

export const folderService = {
  createFolder: async (userId: number, folderName: string): Promise<number> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.post(`${FOLDER_SERVICE_BASE_URL}/create/${userId}`, {
        nome: folderName
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao pegar receita por id:', error)
      throw error
    }
  },

  getFoldersByUserId: async (userId: number): Promise<PastaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${FOLDER_SERVICE_BASE_URL}/list-usuario/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao pegar pastas por id de usuário:', error)
      throw error
    }
  },

  getFolderRecipes: async (folderId: number): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${FOLDER_SERVICE_BASE_URL}/${folderId}/receitas`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao pegar receitas da pasta:', error)
      throw error
    }
  },

  favoriteRecipe: async (recipeId: number, userId: number) => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.post(`${FOLDER_SERVICE_BASE_URL}/${recipeId}/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao favoritar receita:', error)
      throw error
    }
  },

  addRecipeToFolder: async (folderId: number, recipeId: number) => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.post(`${FOLDER_SERVICE_BASE_URL}/add-receita/${folderId}/${recipeId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao adicionar receita à pasta:', error)
      throw error
    }
  },
}
