import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStyles } from "./HomeStyles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        alignItems="center"
        justify="flex-end"
      >
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} align="center">
          <Paper elevation={5} className={classes.paperStyle}>
            <figure>
              <img
                alt="Skylord's Timekeeper Logo"
                src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                className={classes.logoStyle}
              />
            </figure>
          </Paper>
          <div className={classes.buttonsDivStyle}>
            <Button
              component={Link}
              to={"/about"}
              className={classes.buttonStyle}
            >
              <Typography variant="subtitle1">Learn More</Typography>
            </Button>
            <Button
              component={Link}
              to={"/sign-in"}
              className={classes.buttonStyle}
            >
              <Typography variant="subtitle1">Sign In</Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
