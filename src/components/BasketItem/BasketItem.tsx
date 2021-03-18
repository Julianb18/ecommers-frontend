import React from 'react'

import './BasketItem.scss'

const BasketItem = () => {
  return (
    <div className="item">
      <div className="item__image">
        <img
          src="https://i.ebayimg.com/images/g/p~sAAOSwbDpegZX-/s-l640.jpg"
          alt=""
        />
      </div>
      <div className="item__details">
        <h3>Razer Mamba</h3>
        <p>
          stock: <span>23</span>
        </p>
        <button>Remove</button>
      </div>
      <div className="item__price">
        <p>‎€80.99</p>
      </div>
    </div>
  )
}

export default BasketItem
