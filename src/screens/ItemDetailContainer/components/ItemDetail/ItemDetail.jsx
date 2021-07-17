/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { ItemDetailStyles } from './ItemDetailStyles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Container, Card, CardContent, CardMedia, CardActions, Chip } from '@material-ui/core'
import { PurchaseButtons } from '../../../../components/PurchaseButtons/PurchaseButtons'
import { ItemCount } from '../../../../components/ItemCount/ItemCount'
import { CartContext } from '../../../../context/CartContext'

const useStyles = makeStyles((theme) => ItemDetailStyles(theme))

const itemBrand = {
  NVIDIA: '#76B900',
  AMD: '#DA0032'
}

const getbrandColor = brand => itemBrand[brand]

export const ItemDetail = props => {
  const classes = useStyles()
  const [stockItem, setStockItem] = useState(0)
  const [click, setClick] = useState(false)
  const { addItem, removeItem } = useContext(CartContext)

  const onAdd = cantidad => {
    setStockItem(cantidad)
    setClick(true)
    addItem({ item: props, quantity: cantidad })
  }

  const clickCancelar = cl => {
    setClick(false)
    removeItem(props.id)
  }
  return <Container className={classes.cardGrid} maxWidth="xs">
    <Grid item xs={12}>
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
              <Typography variant="body2" display="block" paragraph>
                {props.description}
                </Typography>
              <CardActions className={classes.cardActions}>
              {
                    click
                      ? <PurchaseButtons clickCancelar={clickCancelar}/>
                      : <ItemCount stock={props.stock} valorInicial={1} itemsCant={stockItem} onAdd={onAdd}/>
                }
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
  </Container>
}
