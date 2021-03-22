import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, Product } from '../types'
import { fetchAllProducts } from '../redux/actions/product'

export const useProducts = (productSearch: string): [Product[]] => {
  const dispatch = useDispatch()

  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  const productList = useSelector((state: AppState) => state.product.products)
  console.log(productList)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  // search by name of product / brand or model
  useEffect(() => {
    let filteredByName = productList.filter(
      (product) =>
        product.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.model.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.productName.toLowerCase().includes(productSearch.toLowerCase())
    )

    setSearchedProducts(filteredByName)
  }, [productList, productSearch])

  return [searchedProducts]
}
