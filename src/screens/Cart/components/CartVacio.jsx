import React from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const CartVacio = () => {
  return <>
      <Box textAlign="center">
      <Typography variant="h3">No hay artículos en el carrito.</Typography>
        <Button variant="outlined" color="primary" component={Link} to={'/'}>
          Volver
        </Button>
      </Box>
    </>
}
