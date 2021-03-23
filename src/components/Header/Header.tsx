import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './Header.scss'
import { AppState, SearchProps } from '../../types'
import { logOutUser } from '../../redux/actions/user'
import { useProducts } from '../../hooks/useProduct'

const Header = ({ productSearch, handleChange }: SearchProps) => {
  const user = useSelector((state: AppState) => state.user.loggedUser)
  const cartProducts = useSelector((state: AppState) => state.cart.products)
  const allProducts = useSelector((state: AppState) => state.product.products)

  const dispatch = useDispatch()

  // console.log(allProducts)

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        LOGO
      </Link>
      <div className="header__search">
        <input
          className="header__search__input"
          type="text"
          name="productName"
          value={productSearch}
          onChange={handleChange}
        />
        <div className="header__search__icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav__auth">
          {user.token === '' ? (
            <Link to="/login" className="header__nav__auth__signIn">
              Sign in
            </Link>
          ) : (
            <div className="header__nav__auth__signOut">
              <p>{user.name}</p>
              <button onClick={() => dispatch(logOutUser())}>Sign Out</button>
            </div>
          )}
        </div>

        <Link to="/cart" className="header__nav__cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="header__nav__cart__count">
            {cartProducts.length}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
