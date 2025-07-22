import AsyncStorage from "@react-native-async-storage/async-storage"
import { axiosInstance } from "../lib/axios"
import type { Ingredient } from "../types"

const INGREDIENT_SERVICE_BASE_URL = '/ingredientes'

export const ingredientService = {
  getIngredients: async (): Promise<Ingredient> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get<Ingredient>(`${INGREDIENT_SERVICE_BASE_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao listar ingredientes:', error)
      throw error
    }
  },

  getIngredientsByName: async (name: string): Promise<Ingredient> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get<Ingredient>(`${INGREDIENT_SERVICE_BASE_URL}/${name}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao listar ingredientes:', error)
      throw error
    }
  },
}
