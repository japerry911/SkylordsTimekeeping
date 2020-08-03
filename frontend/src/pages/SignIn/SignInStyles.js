import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "100%",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: "10rem",
  },
  logoImgStyle: {
    width: "40%",
    height: "auto",
  },
  paperStyle: {
    paddingTop: "3rem",
    marginTop: "3rem",
    height: "90%",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  buttonStyle: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.primary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "30%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `1pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
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
    width: "70%",
    height: "75%",
    padding: "3rem 0",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
  },
  mainContainerStyle: {
    minHeight: "40rem",
  },
  buttonGridStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "2rem",
  },
  formStyle: {
    width: "100%",
  },
}));
