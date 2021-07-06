/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])

export const ContextProvider = props => {
  const [itemsCart, setItemsCart] = useState([])

  const IsInCart = itemId => {
    itemsCart.find(itemCart => itemCart.item.id === itemId)
  }

  const addItem = addedItem => {
    if (IsInCart(addedItem.item.id)) {
      const actualizarItem = itemsCart.map((itemCart) => {
        const cantidadTotal = itemCart.quantity + addedItem.quantity
        if (itemCart.item.id === addedItem.item.id) {
          return { ...itemCart, quantity: cantidadTotal }
        }
        return itemCart
      })
      setItemsCart(actualizarItem)
    } else {
      setItemsCart(addedItems => [...addedItems, addedItem])
    }
  }

  const clear = () => {
    setItemsCart([])
  }

  const removeItem = id => {
    setItemsCart(itemsCart.filter((item) => item.item.id !== id))
  }

  useEffect(() => {
    console.log('Carrito Actualizado:', itemsCart)
  }, [itemsCart])

  return <CartContext.Provider value={{ itemsCart, addItem, clear, removeItem }}>
        {props.children}
    </CartContext.Provider>
}
