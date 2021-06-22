/* eslint-disable react/prop-types */
import React from 'react'
import { Item } from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: '20px 0'
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}))

export const ItemList = props => {
  const classes = useStyles()
  const producto = props.items.map((item, i) => {
    return <Item key={i} {...item} />
  })
  return <>
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing ={4}>
    { producto }
    </Grid>
  </Container>
  </>
}
