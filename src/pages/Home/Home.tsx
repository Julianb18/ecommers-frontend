import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'

import ProductCard from '../../components/Product/ProductCard'
import { useProducts } from '../../hooks/useProduct'
import { fetchAllProducts } from '../../redux/actions'
import { AppState } from '../../types'
import './Home.scss'

const Home = () => {
  // const dispatch = useDispatch()
  // const products = useSelector((state: AppState) => state.product.products)
  const [productSearch, setProductSearch] = useState<string>('')
  const [products] = useProducts(productSearch)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductSearch(event.target.value)
  }
  // useEffect(() => {
  //   dispatch(fetchAllProducts())
  // }, [dispatch])
  return (
    <>
      <Header productSearch={productSearch} handleChange={handleChange} />
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
    </>
  )
}

export default Home
