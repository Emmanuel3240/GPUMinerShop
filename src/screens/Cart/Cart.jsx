import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartVacio } from './components/CartVacio'
import { CartContent } from './components/CartContent'
import { Order } from '../Order/Order'
import { FinalizarCompra } from './components/FinalizarCompra'

export const Cart = () => {
  const { itemsCart, orderData } = useContext(CartContext)
  return <>
      {itemsCart.length === 0
        ? <CartVacio />
        : <>
          {orderData
            ? <Order />
            : <>
              <CartContent />
              <FinalizarCompra />
            </>
          }
        </>
      }
    </>
}
