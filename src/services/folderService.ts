import AsyncStorage from "@react-native-async-storage/async-storage"
import { axiosInstance } from "../lib/axios"
import type { Recipe } from "../types"

const FOLDER_SERVICE_BASE_URL = '/pastas'

export const folderService = {
  createFolder: async (userId: number, folderName: string) => {
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

  getFoldersByUserId: async (userId: number) => {
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

  getFolderRecipes: async (folderId: number): Promise<Recipe[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get<Recipe[]>(`${FOLDER_SERVICE_BASE_URL}/${folderId}/receitas`, {
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
