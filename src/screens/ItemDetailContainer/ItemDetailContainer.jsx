import React, { useEffect, useState } from 'react'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'

export const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([])
  const { itemId } = useParams()
  useEffect(() => {
    const itemCollection = dataBase.collection('items')
    const item = itemCollection.doc(itemId)

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No existe')
          return
        }
        setDetailItem([{ id: doc.id, ...doc.data() }])
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }, [])
  return (
    <>
      {detailItem.map((detail, i) => (
        <ItemDetail key={i} {...detail} />
      ))}
    </>
  )
}
