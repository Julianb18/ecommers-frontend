import { takeLatest } from 'redux-saga/effects'

import {
  LogOutUserActions,
  LOGOUT_USER,
  LogUserActions,
  LOG_USER,
} from '../../types'

function* saveToLocalStorage(action: LogUserActions) {
  yield localStorage.setItem('user', JSON.stringify(action.payload.user))
}

function* removeFromLocalStorage(action: LogOutUserActions) {
  yield localStorage.removeItem('user')
}

export default [
  takeLatest(LOG_USER, saveToLocalStorage),
  takeLatest(LOGOUT_USER, removeFromLocalStorage),
]
