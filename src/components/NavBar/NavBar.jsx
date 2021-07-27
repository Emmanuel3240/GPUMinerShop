import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, Button } from '@material-ui/core'
import { NavBarStyles } from './NavBarStyles'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => NavBarStyles(theme))

export const NavBar = () => {
  const classes = useStyles()
  const { itemsCart } = useContext(CartContext)
  const nvidia = 'NVIDIA'
  const amd = 'AMD'
  return <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            component={Link}
            to={'/GPUMinerShop/'}
          >
          <Typography align="center" variant="h1" className={classes.title}>
            GPUMinerShop
          </Typography>
          </IconButton>
          <Button
          variant="text"
          color="inherit"
          component={Link}
          to={`/brand/${nvidia}`}>
            Nvidia
          </Button>
          <Button
          variant="text"
          color="inherit"
          component={Link}
          to={`/brand/${amd}`}>
            AMD
          </Button>
          { itemsCart.length > 0 ? <CartWidget /> : ''}
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
</>
}
