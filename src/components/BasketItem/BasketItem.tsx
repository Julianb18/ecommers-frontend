import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cart'
import { Product } from '../../types'

import './BasketItem.scss'

const BasketItem = ({
  brand,
  productName,
  model,
  price,
  stock,
  imageUrl,
  _id,
}: Product) => {
  const dispatch = useDispatch()
  return (
    <div className="item">
      <div className="item__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item__details">
        <h3>{model}</h3>
        <p>
          stock: <span>{stock}</span>
        </p>
        <button onClick={() => dispatch(removeFromCart(_id))}>Remove</button>
      </div>
      <div className="item__price">
        <p>‎€{price}</p>
      </div>
    </div>
  )
}

export default BasketItem
