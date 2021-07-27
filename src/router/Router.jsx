import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { NavBar } from '../components/NavBar/NavBar'
import { Cart } from '../screens/Cart/Cart'
import { ItemCount } from '../components/ItemCount/ItemCount'
import { Error } from '../screens/Error/Error'

export const Router = () => {
  return <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/GPUMinerShop/">
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
        <Route path="/counter">
          <ItemCount />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
}
