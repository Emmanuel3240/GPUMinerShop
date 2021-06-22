/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  },
  cardIdPrecio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}))

export const Item = props => {
  const classes = useStyles()
  return (
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
            component='img'
            className={classes.cardMedia}
            image = {props.picture.pictureUrl}
            title = {props.picture.alt}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                {props.title}
              </Typography>
              <div className={classes.cardIdPrecio}>
              <Typography variant="subtitle2" gutterBottom>
                ID: {props.id}
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom>
                $ {props.price}
              </Typography>
              </div>
              <Divider variant="middle" />
              <Typography variant="caption" gutterBottom>
                {props.description}
              </Typography>
              <CardActions className={classes.cardActions}>
              <Button size="small" variant="outlined"color="primary">Detalles</Button>
              <Button size="small" variant="contained" color="primary">Comprar</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
  )
}
