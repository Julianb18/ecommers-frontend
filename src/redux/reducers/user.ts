import { UserState, UserActions, LOG_USER, LOGOUT_USER } from '../../types'

const localUser = localStorage.getItem('user')

const initialState: UserState = {
  loggedUser:
    localUser !== null
      ? JSON.parse(localUser)
      : {
          name: '',
          email: '',
          token: '',
        },
}

export default function user(state = initialState, action: UserActions) {
  switch (action.type) {
    case LOG_USER: {
      const { user } = action.payload
      return { loggedUser: { ...user } }
    }

    case LOGOUT_USER: {
      return {
        loggedUser: {
          name: '',
          email: '',
          token: '',
        },
      }
    }

    default:
      return state
  }
}
