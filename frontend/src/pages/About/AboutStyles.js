import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "90rem",
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
    padding: "0 3rem 3rem 3rem",
    textIndent: 50,
  },
  ctaButtonStyle: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    width: "20%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      border: `1pt solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      transition: "220ms ease-in-out",
    },
  },
  dividerStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: "95%",
  },
}));
