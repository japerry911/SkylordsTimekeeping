import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./NotFoundStyles";

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Typography variant="h1" className={classes.textStyle}>
            404 - Not Found
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
