import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'

function App () {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
