import axios, { AxiosResponse, AxiosError } from 'axios'
import { baseUrl } from 'app/system/helpers'

export const ApiService = axios.create({
  baseURL: baseUrl,
})

ApiService.interceptors.response.use(
  (response: AxiosResponse) => {
   // console.log(response)
    return response.data
  },
  (error: AxiosError) => {
    console.log(error)
  }
)