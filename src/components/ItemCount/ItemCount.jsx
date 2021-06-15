import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'

function ItemCount () {
  const [contador, setContador] = useState(0)
  const [sumarActivo, setSumarActivo] = useState(false)
  const [restarActivo, setRestarActivo] = useState(true)
  const sumar = () => {
    setContador(contador + 1)
    contador < 8 ? setRestarActivo(false) : setSumarActivo(true)
  }

  const restar = () => {
    setContador(contador - 1)
    contador > 1 ? setSumarActivo(false) : setRestarActivo(true)
  }

  return (
    <div align="center">
      <h2>Contador</h2>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <h2 style={{ paddingRight: 20 }}>{contador}</h2>
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          color="secondary"
        >
          <Button onClick={sumar} disabled={sumarActivo}>
            +
          </Button>
          <Button onClick={restar} disabled={restarActivo}>
            -
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default ItemCount
