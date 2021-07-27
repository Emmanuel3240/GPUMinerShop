export const NavBarStyles = theme => {
  return ({
    offset: {
      ...theme.mixins.toolbar,
      marginBottom: '1rem'
    },
    homeButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Encode Sans SC'
    }
  })
}
