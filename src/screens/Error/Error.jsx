import React from 'react'
import { Typography } from '@material-ui/core'

export const Error = () => {
  return <>
        <Typography align="center" variant="h2">
            Error 404
        </Typography>
        <Typography align="center" variant="h4">
            La url especificada no existe
        </Typography>
    </>
}
