import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import { Router } from './router/Router'

function App () {
  return <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
}

export default App
