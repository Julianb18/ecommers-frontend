import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderHistory } from '../../redux/actions/cart'

import { AppState, OrderHistory } from '../../types'

const PastOrders = () => {
  const token = useSelector((state: AppState) => state.user.loggedUser.token)
  const previousOrders = useSelector(
    (state: AppState) => state.cart.previousOrders
  ) as OrderHistory[]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrderHistory(token))
  }, [dispatch])
  return (
    <div>
      {previousOrders.map((order) => (
        <div key={order._id}>
          <p>{order._id}</p>
          <p>{order.products.length}</p>
        </div>
      ))}
    </div>
  )
}

export default PastOrders
