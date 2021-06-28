import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2)
  }
}))

export const Cart = () => {
  const classes = useStyles()
  return <main>
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom>
          Cart
        </Typography>
      </Container>
    </div>
    <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom>
          En construcción
        </Typography>
  </main>
}
