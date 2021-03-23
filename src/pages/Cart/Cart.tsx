import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import BasketItem from '../../components/BasketItem/BasketItem'
import Header from '../../components/Header/Header'
import PastOrders from '../../components/OrderHistory/PastOrders'
import { useProducts } from '../../hooks/useProduct'
import { createOrder } from '../../redux/actions/cart'
import { AppState } from '../../types'

// import Product from '../../components/Product/Product'
import './Cart.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.cart.products)
  const token = useSelector((state: AppState) => state.user.loggedUser.token)
  // const [productSearch, setProductSearch] = useState<string>('')
  // const [products] = useProducts(productSearch)

  const prices = products.map((product) => product.price)
  const total = prices
    .reduce(function (acc, price) {
      return acc + price
    }, 0)
    .toFixed(2)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setProductSearch(event.target.value)
  // }

  return (
    <>
      {/* <Header productSearch={productSearch} handleChange={handleChange} /> */}

      <Link to="/" className="back">
        <i className="fas fa-chevron-left"></i>
        <p>Home</p>
      </Link>

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
              <p>Subtotal: ‎€{total}</p>
            </div>
          </div>
          <div className="cart__container__right">
            <div className="cart__container__right__checkout">
              <div className="cart__container__right__checkout__total">
                <h3>Subtotal:</h3>
                <span>€{total}</span>
              </div>
              <button onClick={() => dispatch(createOrder(products, token))}>
                Proceed to Checkout
              </button>
            </div>

            <div className="cart__container__right__history">
              <h3>Order History</h3>
              <PastOrders />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
