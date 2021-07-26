import React, { useEffect, useState } from 'react'
import { ItemList } from './components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { brandId } = useParams()
  useEffect(() => {
    const itemCollection = dataBase.collection('items')

    if (brandId === undefined) {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No results')
          }
          setItems(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        })
        .catch((error) => {
          console.log('Error:', error)
        })
    } else {
      itemCollection
        .where('brand', '==', brandId)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No results')
          }
          setItems(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        })
        .catch((error) => {
          console.log('Error:', error)
        })
    }
  }, [brandId])
  return (
    <>
      <ItemList items={items} />
    </>
  )
}
