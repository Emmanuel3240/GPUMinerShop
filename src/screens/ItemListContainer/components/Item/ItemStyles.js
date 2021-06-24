export const useStyles = theme => {
  return ({
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
  })
}
