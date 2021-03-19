import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import userSagas from './user'

export default function* rootSaga() {
  yield all([...productSagas, ...uiSagas, ...userSagas])
}
