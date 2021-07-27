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
        <Route path="GPUMinerShop/">
          <ItemListContainer />
        </Route>
        <Route path="GPUMinerShop//brand/:brandId">
          <ItemListContainer />
        </Route>
        <Route path="GPUMinerShop//item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="GPUMinerShop//cart">
          <Cart />
        </Route>
        <Route path="GPUMinerShop//counter">
          <ItemCount />
        </Route>
        <Route path="GPUMinerShop//*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
}
