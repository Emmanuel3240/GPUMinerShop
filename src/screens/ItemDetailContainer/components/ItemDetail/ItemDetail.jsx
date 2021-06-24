/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Container, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: '5px 0'
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
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

export const ItemDetail = props => {
  const classes = useStyles()
  const producto = props.items.map((item, i) => {
    return <Item key={i} {...item} />
  })
  return <>
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing ={4}>
    { producto }
    </Grid>
  </Container>
  </>
}

const Item = props => {
  const classes = useStyles()
  return (
        <Grid item xs={12} sm={12} md={12}>
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
              <Typography variant="body2" display="block" gutterBottom>
                {props.description}
                </Typography>
              <CardActions className={classes.cardActions}>
              <Button size="small" variant="contained" color="primary">Comprar</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
  )
}
