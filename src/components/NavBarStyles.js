export const NavBarStyles = theme => {
    return ({
        offset: {
          ...theme.mixins.toolbar,
          marginBottom: "1rem",
        },
        menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
              flexGrow: 1, 
          }})
};