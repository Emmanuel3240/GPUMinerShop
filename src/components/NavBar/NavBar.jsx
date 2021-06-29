import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { NavBarStyles } from './NavBarStyles'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => NavBarStyles(theme))

export const NavBar = () => {
  const classes = useStyles()
  const nvidia = 'NVIDIA'
  const amd = 'AMD'
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            component={Link}
            to={'/'}
          >
            <MenuIcon />
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
          <Typography align="center" variant="h6" className={classes.title}>
            GPUMinerShop
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  )
}
