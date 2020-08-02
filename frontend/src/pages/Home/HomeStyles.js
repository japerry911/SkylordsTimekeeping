import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    width: "100%",
    height: "100%",
    backgroundImage: `url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Home/amanda-jones-CcIIao_-Eow-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
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
    backgroundColor: theme.palette.primary.main,
    width: "50%",
    borderRadius: 12,
    padding: "2rem",
    border: `3pt solid ${theme.palette.secondary.main}`,
  },
  buttonsDivStyle: {
    paddingTop: "3rem",
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
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
    },
  },
}));
