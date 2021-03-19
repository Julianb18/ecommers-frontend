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
      <h3>Order History</h3>
      {previousOrders.map((order) => (
        <>
          <p>{order._id}</p>
          <p>{order.products.length}</p>
        </>
      ))}
    </div>
  )
}

export default PastOrders
