import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_ALL_PRODUCTS,
} from '../../types'

const initialState: ProductState = {
  products: [],
}

export default function product(state = initialState, action: ProductActions) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS: {
      const { products } = action.payload
      return { products: [...products] }
    }

    case ADD_PRODUCT: {
      const { product } = action.payload
      if (state.products.find((p) => p._id === product._id)) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, products: [...state.products, product] }
    }

    case REMOVE_PRODUCT: {
      const { product } = action.payload
      const index = state.products.findIndex((p) => p._id === product._id)
      if (index >= 0) {
        state.products.splice(index, 1)
        return { ...state, products: [...state.products] }
      }
      return state
    }

    default:
      return state
  }
}
