import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: purple,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
});

export default theme;