import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Router } from './router/Router'
import { ContextProvider } from './context/CartContext'

function App () {
  return <ThemeProvider theme={theme}>
    <ContextProvider>
        <Router />
    </ContextProvider>
    </ThemeProvider>
}

export default App
