import { useQuery } from '@tanstack/react-query'
import { fetcher, type ParamsRequest } from '@/lib/fetcher'

export type ResponseProductsML = {
  products: ProductML[]
  token: boolean
}

export type ProductML = {
  id: string
  descriptions: string
  permalink: string
  pictures: string
  title: string
  attributes: ProductMLAttributes[]
  status: string
  price: number
  soldQuantity: number
  availableQuantity: number
  statusDescription: string
  descriptionIA: string
}

export type ProductMLAttributes = {
  id: string
  name: string
  value: string
}

export function useGetProducts(searchParams: ParamsRequest) {
  return useQuery<ResponseProductsML>({
    queryKey: ['admin', 'products'],
    queryFn: async () => {
      const response = await fetcher<ResponseProductsML>({
        url: '/ml/products',
        method: 'GET',
        params: searchParams,
      })

      return response.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
