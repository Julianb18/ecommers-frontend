// Action types
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export type Product = {
  brand: string
  productName: string
  price: number
  stock: number
  imageUrl: string
}

export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: {
    product: Product
  }
}
export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: {
    product: Product
  }
}

export type CartAction = AddToCartAction | RemoveFromCartAction
