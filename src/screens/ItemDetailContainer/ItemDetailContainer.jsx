/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { ItemsAPI } from '../../services/ItemsAPI'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([])
  const { itemId } = useParams()
  useEffect(() => {
    ItemsAPI().then((response) => {
      setDetailItem(response.filter(item => item.id.includes(itemId))
      )
    })
  }, [itemId])
  return <>
      {detailItem.map((detail, i) => (<ItemDetail key={i} {...detail} />))}
      </>
}
