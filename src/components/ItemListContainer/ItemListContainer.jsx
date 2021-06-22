import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))

const data = [
  {
    id: '39',
    title: 'nVidia Geforce RTX3090',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 1499,
    picture: {
      pictureUrl: 'https://acortar.link/La92a',
      alt: 'Geforce RTX3090'
    },
    stock: 100
  },
  {
    id: '38ti',
    title: 'nVidia Geforce RTX3080Ti',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 1299,
    picture: {
      pictureUrl: 'https://acortar.link/hWpLn',
      alt: 'Geforce RTX3080Ti'
    },
    stock: 100
  },
  {
    id: '38',
    title: 'nVidia Geforce RTX3080',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 1199,
    picture: {
      pictureUrl: 'https://acortar.link/DIDk2',
      alt: 'Geforce RTX3090'
    },
    stock: 100
  },
  {
    id: '37ti',
    title: 'nVidia Geforce RTX3070Ti',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 999,
    picture: {
      pictureUrl: 'https://acortar.link/pOtW4',
      alt: 'Geforce RTX3070Ti'
    },
    stock: 100
  },
  {
    id: '37',
    title: 'nVidia Geforce RTX3070',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 799,
    picture: {
      pictureUrl: 'https://acortar.link/rdbp5',
      alt: 'Geforce RTX3070'
    },
    stock: 100
  },
  {
    id: '36ti',
    title: 'nVidia Geforce RTX3060Ti',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.',
    price: 599,
    picture: {
      pictureUrl: 'https://acortar.link/azYFo',
      alt: 'Geforce RTX3060Ti'
    },
    stock: 100
  }
]

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(data), 2000)
})

export const ItemListContainer = props => {
  const classes = useStyles()
  const [items, setItems] = useState([])
  useEffect(() => {
    myPromise.then(itemsData => setItems(itemsData))
  }, [])
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
