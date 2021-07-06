/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { IconButton, Typography, Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Link } from 'react-router-dom'

export const ItemCount = (props) => {
  const { stock, valorInicial, cantidadProducto, onAdd } = props

  const [count, setCount] = useState(
    valorInicial > cantidadProducto ? valorInicial : cantidadProducto
  )

  const handleChangeCount = () => {
    setCount(count + 1)
  }
  const handleChangeDiscount = () => {
    setCount(count - 1)
  }

  return <>
    <Button variant="outlined" color="primary" component={Link} to={'/'}>
        Volver
    </Button>
    <IconButton
        onClick={(e) => handleChangeDiscount()}
        disabled={count === valorInicial}
    >
        <RemoveCircleOutlineIcon />
    </IconButton>
    <Typography variant="h5">{count}</Typography>
    <IconButton
        onClick={(e) => handleChangeCount()}
        disabled={!(count < stock)}
    >
        <AddCircleOutlineIcon />
    </IconButton>
    <Button
        variant="contained"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => onAdd(count)}
        disabled={stock === 0}
    >
        Agregar
    </Button>
</>
}
