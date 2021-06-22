import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}))

export const Item = (item) => {
  const classes = useStyles()
  return (
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
            component='img'
            className={classes.cardMedia}
            image = {item.picture.pictureUrl}
            title = {item.picture.alt}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h7" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom>
                $ {item.price}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {item.id}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {item.description}
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
