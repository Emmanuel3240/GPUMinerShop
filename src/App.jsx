import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { ContextProvider } from './context/CartContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './screens/Cart/Cart'
import { Error } from './screens/Error/Error'
import { NavBar } from './components/NavBar/NavBar'
function App () {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/brand/:brandId" component={ItemListContainer} />
            <Route path="/item/:itemId" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/*" component={Error} />
          </Switch>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App
