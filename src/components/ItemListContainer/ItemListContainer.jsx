import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: '39',
            title: 'nVidia Geforce RTX 3090',
            description: '',
            price: 1499,
            picture: {
              pictureUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg',
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
        ]),
      2000
    )
  })
}

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    myPromise()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error))
  }, [])

  return <>
  <ItemList productos={products}/>
  </>
}
