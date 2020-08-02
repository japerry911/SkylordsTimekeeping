import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
  logoImgStyle: {
    width: "40%",
    height: "auto",
  },
  paperStyle: {
    paddingTop: "3rem",
    marginTop: "3rem",
    height: "85%",
    width: "75%",
    backgroundColor: theme.palette.primary.main,
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  bodyStyle: {
    color: theme.palette.secondary.main,
    padding: "0 3rem",
    textIndent: 50,
  },
}));
