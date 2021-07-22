import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartVacio } from './components/CartVacio'
import { CartContent } from './components/CartContent'

export const Cart = () => {
  const { itemsCart } = useContext(CartContext)
  return <main>
      {
        itemsCart.length === 0 ? <CartVacio /> : <CartContent />
      }
</main>
}
