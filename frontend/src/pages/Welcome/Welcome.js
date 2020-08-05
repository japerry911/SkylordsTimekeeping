import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useStyles } from "./WelcomeStyles";

const Welcome = () => {
  const classes = useStyles();

  const username = useSelector((state) => state.users.user.UserName);

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} align="center">
          <Paper className={classes.paperStyle}>
            <figure>
              <img
                alt="Skylord's Timekeeper Logo"
                src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                className={classes.logoStyle}
              />
            </figure>
            <Typography variant="h3" className={classes.mainTitleStyle}>
              Welcome Back, {username}!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
