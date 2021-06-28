import React, { useEffect, useState } from 'react'
import { ItemList } from './components/ItemList/ItemList'
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

export const ItemListContainer = (props) => {
  const classes = useStyles()
  const [items, setItems] = useState([])
  useEffect(() => {
    ItemsAPI.then((itemsData) => setItems(itemsData))
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
            Nuestros Productos
          </Typography>
        </Container>
      </div>
      <ItemList items={items} />
    </main>
  )
}
