import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ea5fc',
      light: '#6fd6ff',
      dark: '#0077c8'
    }
  }
})

theme.typography.h1 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem'
  }
}

export default theme
