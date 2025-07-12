// import { getProducts } from '../services'

import { TableProducts } from '../components'
import { useGetProducts } from '../services'

export const Products = () => {
  const { data, isLoading, error } = useGetProducts({})

  if (isLoading) return <p>Carregando...</p>

  if (error || !data) return <p>Erro ao buscar produtos</p>

  return <TableProducts products={data.products} />
}
