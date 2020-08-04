import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import goServer from "../../api/goServer";
import LoadingOverlay from "react-loading-overlay";
import { useStyles } from "./ClockingStyles";

const Clocking = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.mainDivStyle}>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading..."
        styles={{
          wrapper: (base) => ({
            ...base,
            height: "100%",
            width: "100%",
          }),
        }}
      >
        <Grid
          container
          className={classes.mainGridStyle}
          justify="center"
          alignItems="center"
        >
          <Paper elevation={5} className={classes.mainPaperStyle}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.gridItemStyle}
              align="center"
            >
              <Typography variant="h2" className={classes.titleStyle}>
                CLOCKING
              </Typography>
              <Divider className={classes.dividerStyle} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.gridItemStyle}
              align="center"
            >
              <Paper className={classes.subPaperStyle}></Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.gridItemStyle}
              align="center"
            >
              <Paper className={classes.subPaperStyle}></Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.gridItemStyle}
              align="center"
            >
              <Paper className={classes.subPaperStyle}></Paper>
            </Grid>
          </Paper>
        </Grid>
      </LoadingOverlay>
    </div>
  );
};

export default Clocking;
