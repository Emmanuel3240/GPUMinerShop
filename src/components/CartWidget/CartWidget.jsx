import React, { useContext } from 'react'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    padding: '0 4px'
  }
}))(Badge)

export default function CartWidget () {
  const { itemsCant } = useContext(CartContext)
  return <IconButton aria-label="cart" color="inherit" component={Link} to={'/cart'}>
      <StyledBadge badgeContent={itemsCant} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
}
