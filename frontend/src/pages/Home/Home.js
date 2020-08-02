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
        <Grid item xs={7} sm={7} md={7} lg={7} xl={7} align="center">
          <Paper className={classes.paperStyle}>
            <Typography variant="h2" className={classes.mainTitleStyle}>
              Skylord's Timekeeping
            </Typography>
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
