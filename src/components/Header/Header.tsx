import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
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
        <Link to="/login" className="header__nav__auth">
          Sign in
        </Link>
        <div className="header__nav__cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="header__nav__cart__count">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
