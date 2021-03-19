import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasketItem from '../../components/BasketItem/BasketItem'
import PastOrders from '../../components/OrderHistory/PastOrders'
import { createOrder } from '../../redux/actions/cart'
import { AppState } from '../../types'

// import Product from '../../components/Product/Product'
import './Cart.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.cart.products)

  const token = useSelector((state: AppState) => state.user.loggedUser.token)

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__container__left">
          <h2>Your Basket</h2>
          {products.map((product) => (
            <BasketItem
              key={product._id}
              model={product.model}
              brand={product.brand}
              productName={product.productName}
              price={product.price}
              stock={product.stock}
              imageUrl={product.imageUrl}
              _id={product._id}
            />
          ))}

          <div className="cart__container__left__total">
            <p>Subtotal: ‎€161.98</p>
          </div>
        </div>
        <div className="cart__container__right">
          <div className="cart__container__right__total">
            <h3>Subtotal:</h3>
            <span>€161.98</span>
          </div>
          <button onClick={() => dispatch(createOrder(products, token))}>
            Proceed to Checkout
          </button>

          <div>
            <PastOrders />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
