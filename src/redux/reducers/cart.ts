import {
  ProductState,
  ProductActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActions,
  ADD_ALL_ORDER_HISTORY,
} from '../../types'

const initialState: ProductState = {
  products: [],
  previousOrders: [],
}

export default function cart(state = initialState, action: CartActions) {
  switch (action.type) {
    case ADD_ALL_ORDER_HISTORY: {
      const { previousOrders } = action.payload

      return { ...state, previousOrders: [...previousOrders] }
    }

    case ADD_TO_CART: {
      const { product } = action.payload
      if (state.products.find((p) => p._id === product._id)) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, products: [...state.products, product] }
    }

    case REMOVE_FROM_CART: {
      const { _id } = action.payload
      const products = state.products.filter((product) => product._id !== _id)

      return { ...state, products: [...products] }
    }

    default:
      return state
  }
}
