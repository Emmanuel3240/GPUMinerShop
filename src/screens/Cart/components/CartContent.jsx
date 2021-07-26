import React, { useContext, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import { CartContext } from '../../../context/CartContext'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { FinalizarCompra } from '../components/FinalizarCompra'
import { dataBase } from '../../../firebase/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

const useStyles = makeStyles((theme) => ({
  generalContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1em'
  },
  headerTable: {
    backgroundColor: '#e6e6e6'
  },
  tableContainer: {
    width: '80rem'
  },
  imgItem: {
    maxWidth: '8rem'
  },
  delete: {
    '&:hover': {
      color: '#ff0000'
    }
  }
}))

export const CartContent = () => {
  const { itemsCart, removeItem, subTotal, clear } = useContext(CartContext)
  const classes = useStyles()
  const [orderId, setOrderId] = useState()
  const [, setOutOfStock] = useState([])
  const [showForm, setShowForm] = useState(true)
  const itemsToUpdate = dataBase.collection('items').where(
    firebase.firestore.FieldPath.documentId(),
    'in',
    itemsCart.map((i) => i.item.id)
  )

  const createOrder = (buyer) => {
    const newOrder = {
      buyer: buyer,
      items: itemsCart,
      date: new Date(),
      total: subTotal
    }
    return newOrder
  }

  const addNewOrder = (buyer) => {
    const newOrder = createOrder(buyer)
    const orders = dataBase.collection('orders')
    try {
      orders.add(newOrder).then((doc) => {
        setShowForm(false)
        setOrderId(doc.id)
      })
    } catch (error) {
      console.log('Firebase add doc error:', error)
    }
  }

  const addOrderUpdateItems = (buyer) => {
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch()
      const outOfStock = []
      querySnapshot.docs.forEach((docSnapshot, idx) => {
        if (docSnapshot.data().stock >= itemsCart[idx].quantity) {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - itemsCart[idx].quantity
          })
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
        }
      })

      if (outOfStock.length === 0) {
        batch.commit().then(() => {
          addNewOrder(buyer)
        })
      } else {
        setOutOfStock(outOfStock)
      }
    })
  }
  return <div className={classes.generalContainer}>
      <div className={classes.container}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead className={classes.headerTable}>
              <TableRow>
                <TableCell align="center">Imagen</TableCell>
                <TableCell align="center">Item</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsCart.map((item) => (
                <TableRow key={item.item.id}>
                  <TableCell component="th" scope="row" align="center">
                    <img
                      src={item.item.pictureUrl}
                      alt={item.item.alt}
                      className={classes.imgItem}
                    ></img>
                  </TableCell>
                  <TableCell align="center">{item.item.title}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">u$s {item.item.price}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeItem(item.item.id)}
                      className={classes.delete}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">Total:</TableCell>
              <TableCell align="center">u$s {subTotal}</TableCell>
              <TableCell></TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.container}>
        <Button variant="outlined" color="primary" onClick={clear}>
          Vaciar carrito
        </Button>
      </div>
      <div className={classes.container}>
        {showForm
          ? (
          <FinalizarCompra addOrder={addOrderUpdateItems} />
            )
          : (
          <div className={classes.messageOrder}>
            <Typography variant="h3">¡Gracias por tu compra!</Typography>
            <Typography align="center">Código de pedido: {orderId}</Typography>
          </div>
            )}
      </div>
    </div>
}
