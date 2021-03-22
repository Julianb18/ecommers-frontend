import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
// import Product from './pages/ProductDemo'
import GoogleAuth from './pages/GoogleAuth/GoogleAuth'
// import { Register } from './pages/Register'
import Cart from './pages/Cart/Cart'
import Header from './components/Header/Header'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      {/* <Header /> */}
      <Home />
    </Route>
    <Route exact path="/cart">
      {/* <Header /> */}
      <Cart />
    </Route>
    {/* <Route exact path="/products/:id" component={Product} /> */}
    <Route exact path="/login" component={GoogleAuth} />
  </Switch>
)

export default Routes
