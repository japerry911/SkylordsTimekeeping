import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  footerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  tabStyle: {
    color: theme.colors.white,
    border: `2pt solid ${theme.palette.primary.main}`,
  },
  tabSelectedStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
