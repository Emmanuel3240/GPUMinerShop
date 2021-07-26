import React, { useContext } from 'react'
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
import { Button } from '@material-ui/core'

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
                  <TableCell align="center">$ {item.item.price}</TableCell>
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
              <TableCell align="center">$ {subTotal}</TableCell>
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
    </div>
}
