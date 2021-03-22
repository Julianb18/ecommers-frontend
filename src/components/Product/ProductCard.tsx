import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cart'

import { Product } from '../../types'

import './ProductCard.scss'

const ProductCard = ({
  brand,
  productName,
  model,
  price,
  stock,
  imageUrl,
  _id,
}: Product) => {
  const dispatch = useDispatch()
  const product = {
    brand,
    model,
    productName,
    price,
    stock,
    imageUrl,
    _id,
  }
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__info__name">{model}</h3>
        <p className="product__info__price">
          ‎€<span>{price}</span>
        </p>
      </div>
      <div className="product__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product__btn-container">
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
