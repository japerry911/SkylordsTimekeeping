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
  const [clockingPerformed, setClockingPerformed] = useState(0);
  const [clockId, setClockId] = useState(null);

  let userID = useSelector((state) => state.users.user.ID);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    userID = 1;
    const result = goServer.get(`/api/clockings/find-by-userID/${userID}`).then(
      (response) => {
        if (response.status === 202) {
          setClockInTime(response.data.ClockIn);
          setClockId(response.data.ID);
        } else {
          setClockInTime(null);
          setClockId(null);
        }

        setIsLoading(false);
      },
      () => {
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Error in retrieving Clock In data. Please wait a few seconds, and then reload the page",
          })
        );
        setIsLoading(false);
      }
    );
  }, [userID, clockingPerformed]);

  const clockOut = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const clockOutTime = new Date().toISOString();
    const formData = new FormData();

    formData.set("ClockOutTime", clockOutTime);

    goServer.put(`/api/clockings/${clockId}`, formData).then(
      (response) => {
        console.log(response);
        setClockingPerformed(clockingPerformed === 1 ? 0 : 1);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Process Failed. Please try again in a few seconds after reloading the page",
          })
        );
        setIsLoading(false);
      }
    );
  };

  const clockIn = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const clockInTime = new Date().toISOString();
    const formData = new FormData();

    formData.set("UserID", 1);
    formData.set("ClockIn", clockInTime);

    goServer.post("/api/clockings", formData).then(
      (response) => {
        console.log(response);
        setClockingPerformed(clockingPerformed === 0 ? 1 : 0);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Process Failed. Please try again in a few seconds after reloading the page",
          })
        );
        setIsLoading(false);
      }
    );
  };

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
                  <Button className={classes.buttonStyle} onClick={clockOut}>
                    Clock Out
                  </Button>
                ) : (
                  <Button className={classes.buttonStyle} onClick={clockIn}>
                    Clock In
                  </Button>
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
