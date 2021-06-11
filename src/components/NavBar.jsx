import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, IconButton, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {NavBarStyles} from './Styles/NavBarStyles';
import Badge from './CartWidget'

const useStyles = makeStyles((theme) => NavBarStyles(theme));

const NavBar = () =>{
    const classes = useStyles();
    return (
    <React.Fragment>
    <AppBar position="fixed" color="primary">
      <Toolbar>
          <IconButton edge="start" className = {classes.menuButton} color="inherit">
            <MenuIcon/>
          </IconButton>
          <Button variant="text" color="inherit">
          Home
        </Button>
        <Button variant="text" color="inherit">
          Store
        </Button>
        <Button variant="text" color="inherit">
          About
        </Button>
        <Typography align="center" variant="h6" className={classes.title} >
          GPUMinerShop
        </Typography>
        <IconButton aria-label="show cart items" color="inherit">
          <Badge/>
        </IconButton>
        <Button variant="text" color="inherit" endIcon={<PersonIcon/>}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    <div className={classes.offset}></div>
    </React.Fragment>
    );
};


export default NavBar;