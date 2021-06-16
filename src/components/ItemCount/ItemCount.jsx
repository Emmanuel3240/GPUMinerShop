import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'

const ItemCount = (cantidad) => {
  const [contador, setContador] = useState(0)
  const [sumarDisabled, setSumarDisabled] = useState(false)
  const [restarDisabled, setRestarDisabled] = useState(true)
  const stock = cantidad.stock
  const sumar = () => {
    setContador(contador + 1)
    contador < (stock - 1) ? setRestarDisabled(false) : setSumarDisabled(true)
  }

  const restar = () => {
    setContador(contador - 1)
    contador > 1 ? setSumarDisabled(false) : setRestarDisabled(true)
  }

  return (
    <div align="center" border={1}>
      <h2>nVidia RTX 3090</h2>
      <h2>Stock: 10</h2>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <h2 style={{ paddingRight: 20 }}>{contador}</h2>
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          color="secondary"
        >
          <Button onClick={sumar} disabled={sumarDisabled}>
            +
          </Button>
          <Button style={{ marginTop: 5 }} onClick={restar} disabled={restarDisabled}>
            -
          </Button>
        </ButtonGroup>
      </Box>
      <Button style={{ marginTop: 20 }} variant="contained" color="primary" disabled={restarDisabled}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ItemCount
