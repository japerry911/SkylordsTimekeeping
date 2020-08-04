import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import goServer from "../../api/goServer";
import { useSelector, useDispatch } from "react-redux";
import { handleOpen } from "../../redux/actions/snackbarActions";
import LoadingOverlay from "react-loading-overlay";
import Button from "@material-ui/core/Button";
import { useStyles } from "./ClockingStyles";

const Clocking = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);

  let userID = useSelector((state) => state.users.user.ID);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    userID = 1;
    const result = goServer.get(`/api/clockings/find-by-userID/${userID}`).then(
      (response) => {
        if (response.status === 202) {
          setClockInTime(response.data.ClockIn);
        }

        setIsLoading(false);
      },
      () => {
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Error in retrieving Clock In data. Please wait a few seconds, and then try again",
          })
        );
        setIsLoading(false);
      }
    );
  }, [userID]);

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
            {clockInTime ? (
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
                <Paper className={classes.subPaperStyle}>
                  <Typography variant="body1" className={classes.textStyle}>
                    Last Clock In Time:
                  </Typography>
                  <Typography variant="body1" className={classes.textStyle}>
                    <strong>{clockInTime}</strong>
                  </Typography>
                </Paper>
              </Grid>
            ) : null}
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
              <Paper className={classes.subPaperCenteredStyle}>
                {clockInTime ? (
                  <Button className={classes.buttonStyle}>Clock Out</Button>
                ) : (
                  <Button className={classes.buttonStyle}>Clock In</Button>
                )}
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </LoadingOverlay>
    </div>
  );
};

export default Clocking;
