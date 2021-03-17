import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'

import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <h2 className="home__wrapper__header">Pc Accessories</h2>
        <div className="home__wrapper__product-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
