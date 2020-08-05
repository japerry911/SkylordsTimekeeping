import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "75rem",
    width: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/History/pexels-lukas-590022.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    paddingBottom: "3rem",
    [theme.breakpoints.only("xs")]: {
      minHeight: "70rem",
    },
  },
  paperStyle: {
    padding: "1rem 0",
    marginTop: "3rem",
    height: "100%",
    width: "47%",
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
      height: "88%",
      width: "92%",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  dividerStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: "95%",
  },
  mainContainerStyle: {
    minHeight: "50rem",
  },
  logoImgStyle: {
    width: "40%",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  subPaperStyle: {
    width: "70%",
    height: "90%",
    padding: "1rem 0",
    marginTop: "3rem",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "88%",
      padding: "0.5rem 0",
    },
  },
  formStyle: {
    width: "100%",
  },
  textStyle: {
    color: theme.palette.primary.main,
    padding: "1rem 3rem",
    fontSize: "1.1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: ".9rem",
    },
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    border: `2pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "70%",
    borderRadius: 12,
    padding: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `2pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.only("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: ".6rem",
    },
  },
  gridItemStyle: {
    marginTop: "3rem",
    height: "100%",
    width: "100%",
  },
  hiddenStyle: {
    display: "none",
  },
}));
