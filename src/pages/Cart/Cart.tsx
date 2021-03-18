import React from 'react'
import BasketItem from '../../components/BasketItem/BasketItem'

// import Product from '../../components/Product/Product'
import './Cart.scss'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__container__left">
          <h2>Your Basket</h2>
          <BasketItem />
          <BasketItem />
          <div className="cart__container__left__total">
            <p>Subtotal: ‎€161.98</p>
          </div>
        </div>
        <div className="cart__container__right">
          <div className="cart__container__right__total">
            <h3>Subtotal:</h3>
            <span>€161.98</span>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
