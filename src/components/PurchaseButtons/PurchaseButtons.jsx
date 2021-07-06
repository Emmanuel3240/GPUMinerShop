/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const PurchaseButtons = props => {
  const history = useHistory()
  return <>
  <Button variant="outlined" color="primary" onClick={() => props.clickCancelar(false)}>Cancelar</Button>
  <Button variant="contained" color="primary" onClick={() => history.push('/cart')}>Terminar Compra</Button>
</>
}
