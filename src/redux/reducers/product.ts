import { actionChannel } from '@redux-saga/core/effects'
import { ADD_TO_CART } from '../../types'

export default function products() {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload
    }
  }
}
