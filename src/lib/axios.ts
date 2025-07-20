import axios from 'axios'
import { apiURL } from '../../api'

export const axiosInstance = axios.create({
  baseURL: apiURL,
})
