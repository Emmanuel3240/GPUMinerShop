/* eslint-disable react/prop-types */
import React from 'react'
import { Item } from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: '5px 0'
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
  const { items } = props
  return <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {items.map((item, i) =>
          <Item key={i} {...item} />
        )}
      </Grid>
    </Container>
}
