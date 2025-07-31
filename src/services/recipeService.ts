import AsyncStorage from '@react-native-async-storage/async-storage'
import { axiosInstance } from '../lib/axios'
import type { ReceitaDto } from '../dtos/ReceitaDto'

const RECIPE_SERVICE_BASE_URL = '/receitas'

export const recipeService = {
  getRecipeById: async (id: number): Promise<ReceitaDto> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${RECIPE_SERVICE_BASE_URL}/findById/${id}`, {
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

  getRecipes: async (): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${RECIPE_SERVICE_BASE_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao listar receitas:', error)
      throw error
    }
  },

  getRecipesByIngredients: async (ingredients: string[]): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.post(`${RECIPE_SERVICE_BASE_URL}/filtro`, ingredients, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('Erro ao listar receitas por ingredientes:', error)
      throw error
    }
  },

  getRecipesByName: async (name: string): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${RECIPE_SERVICE_BASE_URL}/${name}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao buscar receitas:', error)
      throw error
    }
  },

  getRecommendedRecipes: async (): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${RECIPE_SERVICE_BASE_URL}/recomendacoes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao listar receitas recomendadas:', error)
      throw error
    }
  },

  getRecipesByCategory: async (category: string): Promise<ReceitaDto[]> => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const response = await axiosInstance.get(`${RECIPE_SERVICE_BASE_URL}/filtro/${category}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (error) {
      console.error('Erro ao listar receitas recomendadas:', error)
      throw error
    }
  },
}
