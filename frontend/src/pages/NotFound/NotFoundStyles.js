import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/NotFound/nicole-wilcox-zAWs-hKChYA-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  },
  mainGridContainerStyle: {
    height: "80%",
    width: "100%",
  },
  textStyle: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}));
