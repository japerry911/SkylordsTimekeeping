import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
  },
  toolbarMargin: theme.mixins.toolbar,
  logoStyle: {
    width: "35%",
    [theme.breakpoints.only("md")]: {
      width: "55%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  figureStyle: {
    width: "90%",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
  rightStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
}));
