import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  formControlStyle: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      width: "85%",
    },
  },
  mainDivStyle: {
    minHeight: "95rem",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: "3rem",
    [theme.breakpoints.only("xs")]: {
      minHeight: "85rem",
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
    border: `3pt solid ${theme.palette.secondary.main}`,
    padding: "1rem 0",
    marginTop: "3rem",
    height: "100%",
    width: "60%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("md")]: {
      height: "100%",
      width: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "100%",
      width: "90%",
    },
    [theme.breakpoints.only("xs")]: {
      height: "92%",
      width: "92%",
    },
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
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "42%",
      fontSize: ".6rem",
    },
  },
  dividerStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: "95%",
  },
  textFieldStyle: {
    width: "70%",
    margin: "1.5rem 0",
    [theme.breakpoints.only("xs")]: {
      width: "80%",
      "& .MuiFormLabel-root": {
        fontSize: "0.7rem",
      },
      "& .MuiFormHelperText-root": {
        fontSize: "0.5rem",
      },
    },
  },
  bigTextFieldStyle: {
    width: "100%",
    margin: "1.15rem 0",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      "& .MuiFormLabel-root": {
        fontSize: "0.7rem",
      },
      "& .MuiFormHelperText-root": {
        fontSize: "0.5rem",
      },
    },
  },
  subPaperStyle: {
    width: "80%",
    height: "90%",
    padding: "1rem 0",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "88%",
      padding: "0.5rem 0",
      height: "70%",
    },
  },
  mainContainerStyle: {
    minHeight: "40rem",
  },
  buttonGridStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingTop: "2rem",
  },
  formStyle: {
    width: "100%",
  },
  textGridStyle: {
    width: "100%",
  },
}));
