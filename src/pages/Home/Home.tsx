import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/Product/ProductCard'
import { fetchAllProducts } from '../../redux/actions'
import { AppState } from '../../types'
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.products)
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  return (
    <div className="home">
      <div className="home__wrapper">
        <h2 className="home__wrapper__header">Pc Accessories</h2>
        <div className="home__wrapper__product-container">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              brand={product.brand}
              model={product.model}
              productName={product.productName}
              price={product.price}
              stock={product.stock}
              imageUrl={product.imageUrl}
              _id={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
