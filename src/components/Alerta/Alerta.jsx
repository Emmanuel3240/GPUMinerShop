import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

export default function Alerta () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert severity="error">Lo siento! Ha ocurrido un error.</Alert>
    </div>
  )
}
