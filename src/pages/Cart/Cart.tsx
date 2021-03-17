import React from 'react'

import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import './Cart.scss'

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__container">
          <div className="cart__container__left">
            <h2>Your Basket</h2>
            <Product />
            <Product />
          </div>
          <div className="cart__container__right">
            <h2>Subtotal</h2>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
