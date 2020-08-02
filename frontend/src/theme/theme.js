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
  },
  fonts: {
    avenirItalicize: "Avenir-Italicize",
    avenirBold: "Avenir-Bold",
    avenirMedium: "Avenir-Medium",
    avenir: "Avenir",
  },
  articlePaperStyle: {
    width: "50%",
    backgroundColor: "black",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
