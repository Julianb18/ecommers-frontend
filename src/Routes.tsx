import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Product from './pages/Product'
import GoogleAuth from './pages/GoogleAuth/GoogleAuth'
import { Register } from './pages/Register'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/google/login" component={GoogleAuth} />
  </Switch>
)

export default Routes
