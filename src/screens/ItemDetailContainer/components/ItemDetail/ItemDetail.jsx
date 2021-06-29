/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { ItemDetailStyles } from './ItemDetailStyles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Container, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ItemDetailStyles(theme))

export const ItemDetail = props => {
  const classes = useStyles()
  const { detailItem } = props
  return <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing ={4}>
    <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.card}>
            <CardMedia
            component='img'
            className={classes.cardMedia}
            image = {detailItem.picture.pictureUrl}
            title = {detailItem.picture.alt}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                {detailItem.title}
              </Typography>
              <div className={classes.cardIdPrecio}>
              <Typography variant="subtitle2" gutterBottom>
                ID: {detailItem.id}
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom>
                $ {detailItem.price}
              </Typography>
              </div>
              <Divider variant="middle" />
              <Typography variant="body2" display="block" gutterBottom>
                {detailItem.description}
                </Typography>
              <CardActions className={classes.cardActions}>
              <Button size="small" variant="contained" color="primary">Comprar</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    <Link to='/'>Volver al inicio</Link>
  </Container>
}
