import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './Header.scss'
import { AppState } from '../../types'
import { logOutUser } from '../../redux/actions/user'

const Header = () => {
  const user = useSelector((state: AppState) => state.user.loggedUser)
  const cartProducts = useSelector((state: AppState) => state.cart.products)
  const dispatch = useDispatch()
  console.log(user)
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        LOGO
      </Link>
      <div className="header__search">
        <input className="header__search__input" type="text" />
        <div className="header__search__icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav__auth">
          {user.token === '' ? (
            <Link to="/login">Sign in </Link>
          ) : (
            <div>
              <p>{user.name}</p>
              <button onClick={() => dispatch(logOutUser())}>sign out</button>
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
