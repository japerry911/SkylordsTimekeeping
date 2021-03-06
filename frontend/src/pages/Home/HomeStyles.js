import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Home/amanda-jones-CcIIao_-Eow-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  mainGridContainerStyle: {
    height: "100%",
    width: "100%",
  },
  mainTitleStyle: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  paperStyle: {
    border: `3pt solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    width: "80%",
    borderRadius: 12,
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: 0,
    },
  },
  buttonsDivStyle: {
    paddingTop: "3rem",
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
      width: "90%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    border: `3pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "40%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `3pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "5rem",
      padding: "0.5rem",
      margin: "1rem 0",
    },
  },
  logoStyle: {
    width: "100%",
  },
}));
