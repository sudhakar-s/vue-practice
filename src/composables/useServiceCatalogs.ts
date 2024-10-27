import { type MaybeRef, toValue, ref } from 'vue'
import { useQuery, keepPreviousData, useQueryClient } from '@tanstack/vue-query'

import { fetch, type AxiosResponse } from '@/services/api'


export type Developer = {
  avatar: string;
  email: string;
  id: string;
  name: string;
}

export type Version = {
  description: string;
  id: string;
  name: string;
  updated_at: string;
  developer?: Developer
}

export type ServiceCatalog = {
  id: string;
  configured: boolean;
  description: string;
  name: string;
  published: boolean;
  type: 'REST';
  metrics?: {
    errors: number;
    latency: number;
    requests: number;
    uptime: number;
  }
  versions?: Version[];
}

export const useServiceCatalogs = ({ search }: { search?: MaybeRef<string> }) => {
  return useQuery({
    queryKey: ['service-catalogs', { search }],
    queryFn: ({ }): AxiosResponse<ServiceCatalog[]> => {
      return fetch.get('/api/services', {
        params: {
          q: toValue(search) || undefined,
        },
      })
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 1,
  })
}

export const useServiceCatalogsById = ({ id }: { id?: MaybeRef<string> }) => {

  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['service-catalogs', { id }],
    queryFn: async ({ }): AxiosResponse<ServiceCatalog> => {
      const idValue = toValue(id) || undefined
      if (!idValue) {
        return Promise.reject(new Error('No ID provided'))
      }
      const data = (await fetch.get('/api/services', {
        params: {
          q: idValue,
        },
      })) as ServiceCatalog[]
      return data[0]
    },
    staleTime: 1000 * 60 * 1,
    initialData: () => {
      const idValue = toValue(id)
      // TODO: query hash function seems to be using ref properties so we are passing a ref to the query key
      const value = (queryClient.getQueryData(['service-catalogs', { search: ref('') }]) as undefined | ServiceCatalog[] || []).find((d) => d.id === idValue)
      console.log(value, 'value')
      return value || undefined
    },
  })
}