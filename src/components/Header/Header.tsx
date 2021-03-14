import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <span className="header__logo">LOGO</span>
      <div className="header__search">
        <input className="header__input" type="text" />
      </div>
      <div className="header__nav">Sign in</div>
      <div>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  )
}

export default Header
