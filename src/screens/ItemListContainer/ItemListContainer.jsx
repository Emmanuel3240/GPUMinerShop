import React, { useEffect, useState } from 'react'
import { ItemList } from './components/ItemList/ItemList'
import { ItemsAPI } from '../../services/ItemsAPI'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { brandId } = useParams()
  useEffect(() => {
    ItemsAPI().then((response) =>
      brandId === undefined
        ? setItems(response)
        : setItems(response.filter(item => item.brand === brandId))
    )
  }, [brandId])
  return <>
      <ItemList items={items} />
    </>
}
