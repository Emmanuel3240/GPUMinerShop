/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])

export const ContextProvider = props => {
  const [itemsCart, setItemsCart] = useState([])
  const [itemsCant, setItemsCant] = useState(0)

  const addItem = addedItem => {
    setItemsCant(itemsCant + addedItem.quantity)
    const item = itemsCart.find(itemCart => itemCart.item.id === addedItem.item.id)
    if (item) {
      const actualizarItem = item.quantity + addedItem.quantity
      item.quantity = actualizarItem
      setItemsCart(itemsCart)
    } else {
      setItemsCart(addedItems => [...addedItems, addedItem])
    }
  }

  const clear = () => {
    setItemsCart([])
    setItemsCant(0)
  }

  const removeItem = id => {
    const selectRemoveItem = itemsCart.find(itemCart => itemCart.item.id === id)
    setItemsCant(itemsCant - selectRemoveItem.quantity)
    setItemsCart(itemsCart.filter((item) => item.item.id !== id))
  }

  useEffect(() => {
    console.log('Carrito Actualizado:', itemsCart)
  }, [itemsCart])

  return <CartContext.Provider value={{ itemsCart, addItem, clear, removeItem, itemsCant }}>
        {props.children}
    </CartContext.Provider>
}
