import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import user from './user'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    user,
    cart,
  })

export default createRootReducer
