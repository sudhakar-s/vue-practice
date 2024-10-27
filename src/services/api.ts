import axios from 'axios'

const baseInstance = axios.create({
  baseURL: window.location.origin,
  adapter: ['fetch', 'xhr', 'http'],
})


baseInstance.interceptors.response.use((response) => {
  return response.data
})

export type AxiosResponse<T> = Promise<T>

export const fetch = baseInstance
