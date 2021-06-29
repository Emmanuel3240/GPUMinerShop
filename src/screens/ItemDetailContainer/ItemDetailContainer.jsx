/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import { ItemsAPI } from '../../services/ItemsAPI'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2)
  }
}))

export const ItemDetailContainer = props => {
  const classes = useStyles()
  const [detailItem, setDetailItem] = useState([])
  const { ItemId } = useParams()
  useEffect(() => {
    ItemsAPI()
      .then((response) => {
        console.log(response)
        setDetailItem(response.filter(element => element.id === parseInt(ItemId))
        )
      })
  }, [ItemId])
  return <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Detalle del Producto
          </Typography>
        </Container>
      </div>
      {detailItem.map((detail) => (
        <ItemDetail detailItem={detail} />
      ))}
    </main>
}
