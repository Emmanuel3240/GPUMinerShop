import React, { useEffect, useState } from 'react'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import { ItemsAPI } from '../../services/ItemsAPI'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2)
  }
}))

export const ItemDetailContainer = () => {
  const classes = useStyles()
  const [items, setItem] = useState([])
  useEffect(() => {
    ItemsAPI.then((itemsData) => {
      const filteredItems = itemsData.filter((element) =>
        element.id.includes('36ti')
      )
      setItem(filteredItems)
    })
  }, [])
  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Detalle del Producto
          </Typography>
        </Container>
      </div>
      <ItemDetail items={items} />
    </main>
  )
}
