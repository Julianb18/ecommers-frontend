import { Dispatch } from 'redux'
import axios from 'axios'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  ADD_ALL_PRODUCTS,
} from '../../types'

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export function addAllProducts(products: Product[]): ProductActions {
  return {
    type: ADD_ALL_PRODUCTS,
    payload: {
      products,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`products/${productId}`)
      .then((resp) => resp.json())
      .then((product) => {
        dispatch(addProduct(product))
      })
  }
}

export const fetchAllProducts = () => {
  return async (dispatch: Dispatch) => {
    console.log('getting all products')
    const response = await axios.get(`/api/v1/products`)
    console.log(response)
    const data = await response.data
    dispatch(addAllProducts(data))
    console.log(data)
  }
}
