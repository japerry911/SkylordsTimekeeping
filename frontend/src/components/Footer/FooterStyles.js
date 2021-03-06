import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  footerStyle: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  tabStyle: {
    color: theme.colors.white,
    border: `2pt solid ${theme.palette.primary.main}`,
    [theme.breakpoints.only("xs")]: {
      minWidth: 30,
    },
  },
  tabTextStyle: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.5rem",
    },
  },
  tabWrapperStyle: {
    textAlign: "center",
  },
  tabSelectedStyle: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.only("xs")]: {
      "& .MuiBottomNavigationAction-label.Mui-selected": {
        fontSize: "0.7rem",
      },
    },
  },
}));
