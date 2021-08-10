import React, { useEffect, useState } from 'react'
import { ItemList } from './components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../Firebase/firebase'
import Alerta from '../../components/Alerta/Alerta'

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { brandId } = useParams()
  const [error, setError] = useState(false)
  useEffect(() => {
    setError(false)
    const itemCollection = dataBase.collection('items')

    if (brandId === undefined) {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            setError(true)
          }
          setItems(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        })
        .catch((_error) => {
          setError(true)
        })
    } else {
      itemCollection
        .where('brand', '==', brandId)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            setError(true)
          }
          setItems(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        })
        .catch((_error) => {
          setError(true)
        })
    }
  }, [brandId])
  return (
    <>
    { error
      ? <Alerta />
      : <ItemList items={items} />
    }
    </>
  )
}
