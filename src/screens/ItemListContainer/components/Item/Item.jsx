/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ItemStyles } from './ItemStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Card, CardContent, CardMedia, CardActions, Button, Chip } from '@material-ui/core'
import Dotdotdot from 'react-dotdotdot'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ItemStyles(theme))

const itemBrand = {
  NVIDIA: '#76B900',
  AMD: '#DA0032'
}

const getbrandColor = brand => itemBrand[brand]

export const Item = props => {
  const classes = useStyles()
  return <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
            component='img'
            className={classes.cardMedia}
            image = {props.picture.pictureUrl}
            title = {props.picture.alt}
            />
            <CardContent className={classes.cardContent}>
              <Chip size="small" label= {props.brand} style={{ background: getbrandColor(props.brand) }}/>
              <Typography variant="h5" gutterBottom>
                {props.title}
              </Typography>
              <div className={classes.cardIdPrecio}>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                ID: {props.id}
              </Typography>
              <Typography variant="h6" display="block" gutterBottom>
                $ {props.price}
              </Typography>
              </div>
              <Divider variant="middle" />
              <Dotdotdot clamp={3}><Typography variant="body2" display="block" paragraph>
                {props.description}
                </Typography></Dotdotdot>
              <CardActions className={classes.cardActions}>
              <Button size="small" variant="outlined" color="primary" component={Link} to={`/item/${props.id}`}>Detalles</Button>
              <Button size="small" variant="contained" color="primary">Comprar</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
}
