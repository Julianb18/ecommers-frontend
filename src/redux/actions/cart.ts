import { Dispatch } from 'redux'
import axios from 'axios'
import {
  Product,
  ADD_TO_CART,
  CartActions,
  REMOVE_FROM_CART,
  OrderHistory,
  ADD_ALL_ORDER_HISTORY,
} from '../../types'

export function addToCart(product: Product): CartActions {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  }
}

export function removeFromCart(_id: string): CartActions {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      _id,
    },
  }
}

export function addOrderHistory(previousOrders: OrderHistory[]): CartActions {
  return {
    type: ADD_ALL_ORDER_HISTORY,
    payload: {
      previousOrders,
    },
  }
}

export function fetchOrderHistory(token: string) {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(`/api/v1/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.data
    dispatch(addOrderHistory(data))
  }
}

export const createOrder = (products: Product[], token: string) => {
  return async (dispatch: Dispatch) => {
    const productsId = products.map((product) => product._id)
    // calculate total price here
    // console.log(productsId)
    const res = await axios.post(
      `/api/v1/orders`,
      { productsId }, // {productsId, totalPrice}
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
}
