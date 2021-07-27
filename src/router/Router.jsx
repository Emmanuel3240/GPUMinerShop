import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { NavBar } from '../components/NavBar/NavBar'
import { Cart } from '../screens/Cart/Cart'
import { Error } from '../screens/Error/Error'

export const Router = () => {
  return <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/">
          <ItemListContainer />
        </Route>
        <Route path="/brand/:brandId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
}
