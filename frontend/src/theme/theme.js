import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303236",
    },
    secondary: {
      main: "#a1a8b6",
    },
  },
  colors: {
    white: "#fff",
    lightGray: "#b9bbc0",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
