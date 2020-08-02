import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  footerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  tabStyle: {
    color: theme.colors.white,
  },
  tabSelectedStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
