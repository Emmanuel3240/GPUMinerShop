import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

const data = [
  {
    id: '39',
    title: 'nVidia Geforce RTX 3090',
    description: '',
    price: 1499,
    picture: {
      pictureUrl: 'https://acortar.link/Nbuqy',
      alt: 'Geforce RTX 3090'
    },
    stock: 100
  },
  {
    id: '39',
    title: 'nVidia Geforce RTX 3090',
    description: '',
    price: 1499,
    picture: {
      pictureUrl: 'https://acortar.link/Nbuqy',
      alt: 'Geforce RTX 3090'
    },
    stock: 100
  },
  {
    id: '39',
    title: 'nVidia Geforce RTX 3090',
    description: '',
    price: 1499,
    picture: {
      pictureUrl: 'https://acortar.link/Nbuqy',
      alt: 'Geforce RTX 3090'
    },
    stock: 100
  }
]

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(data), 2000)
})

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))

export const ItemListContainer = props => {
  const [items, setItems] = useState([])
  useEffect(() => {
    myPromise().then(itemsData => setItems(itemsData))
      .catch(error => console.log(error))
  }, [])
  const classes = useStyles()
  return <>
  <main>
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Nuestros Productos
        </Typography>
      </Container>
      </div>
  <ItemList items={items}/>
  </main>
  </>
}
