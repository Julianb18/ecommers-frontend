import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, Product } from '../types'
import { fetchAllProducts } from '../redux/actions/product'

export const useProducts = (productSearch: string): [Product[]] => {
  const dispatch = useDispatch()

  const [searchedProducts, setSearchedProducts] = useState<any>([])

  const productList = useSelector((state: AppState) => state.product.products)
  // console.log(productList)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  // search by name of product / brand or model
  useEffect(() => {
    let filteredByKeyWord = productList.filter((product) => {
      let searched = `${product.brand.toLowerCase()} ${product.productName.toLowerCase()} ${product.brand.toLowerCase()} ${product.model.toLowerCase()}`
      console.log(searched)
      return (
        searched.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.model.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.productName.toLowerCase().includes(productSearch.toLowerCase())
      )
    })

    setSearchedProducts(filteredByKeyWord)
  }, [productList, productSearch])

  return [searchedProducts]
}
