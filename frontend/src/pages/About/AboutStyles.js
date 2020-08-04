import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "80rem",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      minHeight: "85rem",
    },
    [theme.breakpoints.only("xs")]: {
      minHeight: "90rem",
    },
  },
  logoImgStyle: {
    width: "40%",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  paperStyle: {
    paddingTop: "3rem",
    marginTop: "3rem",
    marginBottom: "5rem",
    height: "85%",
    width: "55%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      paddingBottom: "1rem",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  bodyStyle: {
    color: theme.palette.secondary.main,
    padding: "0 3rem 3rem 3rem",
    textIndent: 50,
    fontSize: "1.1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: ".9rem",
      padding: "0 1.25rem 1.25rem 1.25rem",
      textIndent: 25,
    },
  },
  ctaButtonStyle: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.secondary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.main,
    width: "30%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      border: `1pt solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "65%",
      fontSize: ".9rem",
    },
  },
  dividerStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: "95%",
  },
}));
