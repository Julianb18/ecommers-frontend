import { ADD_TO_CART, REMOVE_FROM_CART, Product, CartAction } from '../../types'

export const addToCart = (product: Product): CartAction => {
  return {
    type: ADD_TO_CART,
    payload: { product },
  }
}

export const removeFromCart = (product: Product): CartAction => {
  return {
    type: REMOVE_FROM_CART,
    payload: { product },
  }
}
