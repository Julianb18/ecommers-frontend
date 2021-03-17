import React from 'react'

import './Product.scss'

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__info__name">Razer Mamba</h3>
        <p className="product__info__price">
          <small>‎€</small>
          <strong>80.99</strong>
        </p>
      </div>
      <div className="product__image">
        <img
          src="https://i.ebayimg.com/images/g/p~sAAOSwbDpegZX-/s-l640.jpg"
          alt=""
        />
      </div>
      <div className="product__btn-container">
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
