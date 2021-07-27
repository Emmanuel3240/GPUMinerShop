import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em'
  }
}))

export const Order = () => {
  const { orderData, clear } = useContext(CartContext)
  const history = useHistory()
  const classes = useStyles()

  const goToIndex = () => {
    history.push('/')
    clear()
  }

  return <>
      <Typography align="center" variant="h3">¡Gracias por tu compra!</Typography>
      <Typography align="center">Código de pedido: {orderData}</Typography>
      <div className={classes.container}>
      <Button variant="outlined" color="primary" onClick={goToIndex}>
          SEGUIR COMPRANDO
      </Button>
      </div>
    </>
}
