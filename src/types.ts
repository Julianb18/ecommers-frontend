// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS'
export const ADD_ALL_ORDER_HISTORY = 'ADD_ALL_ORDER_HISTORY'
export const LOG_USER = 'LOG_USER '
export const LOGOUT_USER = 'LOGOUT_USER '
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  brand: string
  model: string
  productName: string
  price: number
  stock: number
  imageUrl: string
  _id: string
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type AddAllProductsAction = {
  type: typeof ADD_ALL_PRODUCTS
  payload: {
    products: Product[]
  }
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
    _id: string
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | AddAllProductsAction

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | OrderHistoryAction

export type ProductState = {
  products: Product[]
  previousOrders?: OrderHistory[]
}

export type OrderHistory = {
  products: string[]
  user: string
  _id: string
}

export type OrderHistoryAction = {
  type: typeof ADD_ALL_ORDER_HISTORY
  payload: {
    previousOrders: OrderHistory[]
  }
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  user: UserState
  cart: ProductState
}

export type User = {
  name: string
  email: string
  token: string
}

export type LogUserActions = {
  type: typeof LOG_USER
  payload: {
    user: User
  }
}

export type LogOutUserActions = {
  type: typeof LOGOUT_USER
}

export type UserActions = LogUserActions | LogOutUserActions

export type UserState = {
  loggedUser: User
}
