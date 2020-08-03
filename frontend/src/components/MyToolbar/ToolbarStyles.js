import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
  },
  toolbarMargin: theme.mixins.toolbar,
  logoStyle: {
    width: "15%",
    [theme.breakpoints.only("md")]: {
      width: "50%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
  },
  figureStyle: {
    width: "85%",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
}));
