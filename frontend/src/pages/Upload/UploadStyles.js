import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                    url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Upload/new-data-services-bbXaYbKWnjw-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    paddingBottom: "3rem",
  },
  mainGridStyle: {
    height: "100%",
    width: "100%",
  },
  mainPaperStyle: {
    backgroundColor: theme.palette.primary.main,
    width: "35%",
    height: "70%",
    borderRadius: 12,
    padding: "2rem",
    border: `3pt solid ${theme.palette.secondary.main}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      width: "60%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "72%",
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
  gridItemStyle: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  subPaperCenteredStyle: {
    width: "90%",
    height: "40%",
    padding: "0.75rem",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: "0.75rem 0",
    },
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "90%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `1pt solid ${theme.palette.primary.main}`,
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
  fileInputStyle: {
    display: "none",
  },
  subPaperStyle: {
    textIndent: 50,
    width: "90%",
    height: "80%",
    padding: "0.75rem",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    alignItems: "center",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: "0.75rem 0",
      textIndent: 25,
    },
  },
  textStyle: {
    padding: "0 1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.6rem",
    },
  },
}));
