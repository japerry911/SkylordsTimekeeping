import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "80rem",
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
    height: "100%",
    width: "75%",
    backgroundColor: theme.palette.primary.main,
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  buttonStyle: {
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
  textFieldStyle: {
    width: "70%",
    margin: "1.5rem 0",
  },
  subPaperStyle: {
    width: "50%",
    height: "50%",
    padding: "3rem 0",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formStyle: {
    height: "100%",
  },
  mainContainerStyle: {
    minHeight: "40rem",
  },
  buttonGridStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));
