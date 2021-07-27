import React, { useEffect, useState } from 'react'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'
import Alerta from '../../components/Alerta/Alerta'

export const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([])
  const { itemId } = useParams()
  const [error, setError] = useState(false)
  useEffect(() => {
    setError(false)
    const itemCollection = dataBase.collection('items')
    const item = itemCollection.doc(itemId)

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setError(true)
          return
        }
        setDetailItem([{ id: doc.id, ...doc.data() }])
      })
      // eslint-disable-next-line node/handle-callback-err
      .catch((error) => {
        setError(true)
      })
  }, [itemId])
  return <>
    {
    error
      ? <Alerta />
      : detailItem.map((detail, i) => (<ItemDetail key={i} {...detail} />
      ))
    }
    </>
}
