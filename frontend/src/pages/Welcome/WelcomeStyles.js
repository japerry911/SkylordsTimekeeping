import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Welcome/kevin-noble-gA3Qd2tquMc-unsplash.jpg')`,
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
    paddingBottom: "2rem",
  },
  paperStyle: {
    backgroundColor: theme.palette.primary.main,
    width: "80%",
    borderRadius: 12,
    padding: "2rem",
    border: `3pt solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: 0,
    },
  },
  logoStyle: {
    width: "100%",
  },
}));
