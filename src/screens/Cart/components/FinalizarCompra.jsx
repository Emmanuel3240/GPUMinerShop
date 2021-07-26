/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Card, CardContent, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginTop: '1em'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em'
  }
}))

export const FinalizarCompra = (props) => {
  const classes = useStyles()
  const [buyerData, setBuyerData] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setBuyerData({ ...buyerData, [name]: value })
  }

  const submitForm = (event) => {
    event.preventDefault()
    props.addOrder(buyerData)
  }

  return (
    <Card variant="outlined" className={classes.cardContainer}>
      <CardContent className={classes.cardContent}>
        <form onSubmit={submitForm}>
          <TextField
            id="standard-full-width"
            fullWidth
            name="nombre"
            label="Nombre"
            required
            onChange={handleChange}
          />
          <TextField
            id="standard-full-width"
            fullWidth
            name="apellido"
            label="Apellido"
            required
            onChange={handleChange}
          />
          <TextField
            id="standard-full-width"
            fullWidth
            name="calle"
            label="Calle"
            required
            onChange={handleChange}
          />
          <TextField
            id="standard-full-width"
            fullWidth
            name="numero"
            label="Número"
            required
            onChange={handleChange}
          />
          <TextField
            id="standard-full-width"
            fullWidth
            name="telefono"
            label="Teléfono"
            required
            onChange={handleChange}
          />
          <TextField
            id="standard-full-width"
            fullWidth
            label="Email"
            name="email"
            required
            onChange={handleChange}
          />
          <div className={classes.container}>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              className={classes.buttonAceptar}
            >
              ACEPTAR
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
