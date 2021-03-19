import { User, UserActions, LOG_USER, LOGOUT_USER } from '../../types'

export function logUser(user: User): UserActions {
  return {
    type: LOG_USER,
    payload: {
      user,
    },
  }
}

export function logOutUser(): UserActions {
  return {
    type: LOGOUT_USER,
  }
}
