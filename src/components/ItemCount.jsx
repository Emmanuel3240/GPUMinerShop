import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function ItemCount () {
  const [contador, setContador] = useState(0)
  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  return (
    <div align="center">
      <h2>Contador</h2>
      <ButtonGroup variant="contained" color="default">
        <Button onClick={restar}>-</Button>
        <Button onClick={sumar}>+</Button>
      </ButtonGroup>
      <div>{contador}</div>
    </div>
  )
}

export default ItemCount
