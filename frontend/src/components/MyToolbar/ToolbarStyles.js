import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  logoStyle: {
    width: "10%",
  },
  figureStyle: {
    width: "85%",
  },
}));
