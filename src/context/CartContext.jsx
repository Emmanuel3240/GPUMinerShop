/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const ContextProvider = props => {
  const [itemsCart, setItemsCart] = useState([])
  const [itemsCant, setItemsCant] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [orderData, setOrderData] = useState('')

  const addItem = addedItem => {
    setItemsCant(itemsCant + addedItem.quantity)
    setSubTotal(subTotal + (addedItem.item.price * addedItem.quantity))
    const item = itemsCart.find(itemCart => itemCart.item.id === addedItem.item.id)
    if (item) {
      const actualizarItem = item.quantity + addedItem.quantity
      item.quantity = actualizarItem
      setItemsCart(itemsCart)
    } else {
      setItemsCart(addedItems => [...addedItems, addedItem])
    }
  }

  function clear () {
    setItemsCart([])
    setItemsCant(0)
    setSubTotal(0)
    setOrderData('')
  }

  const removeItem = id => {
    const selectRemoveItem = itemsCart.find(itemCart => itemCart.item.id === id)
    setItemsCant(itemsCant - selectRemoveItem.quantity)
    setSubTotal(subTotal - (selectRemoveItem.item.price * selectRemoveItem.quantity))
    setItemsCart(itemsCart.filter((item) => item.item.id !== id))
  }

  const updateOrderData = id => {
    setOrderData(id)
  }

  return <CartContext.Provider value={{ itemsCart, addItem, clear, removeItem, itemsCant, subTotal, orderData, updateOrderData }}>
        {props.children}
    </CartContext.Provider>
}
