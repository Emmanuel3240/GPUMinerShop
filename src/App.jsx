import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer'
/* import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer'
*/import { ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </ThemeProvider>
  )
}

export default App
