export const ItemDetailStyles = (theme) => {
  return {
    cardGrid: {
      padding: '5px 0'
    },
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardContent: {
      flexGrow: 1
    },
    cardIdPrecio: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cardActions: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }
}
