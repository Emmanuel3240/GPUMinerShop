import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export default function Item () {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"
            title="RTX3090"
          />
          <CardContent>
            <Typography align= "center" gutterBottom variant="h5" component="h2">
              GeForce RTX 3090
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
<Button variant="outlined" color="primary">
  Comprar
</Button>
<Button variant="outlined" color="primary">
  Agregar al carrito
</Button>
        </CardActions>
      </Card>
    </div>
  )
}
