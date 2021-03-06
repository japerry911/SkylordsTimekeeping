import React, { useState, useRef, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import goServer from "../../api/goServer";
import LoadingOverlay from "react-loading-overlay";
import { useSelector, useDispatch } from "react-redux";
import { handleOpen } from "../../redux/actions/snackbarActions";
import { CSVLink } from "react-csv";
import { useStyles } from "./HistoryStyles";

const History = () => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [clockingsData, setClockingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const csvBtnRef = useRef(null);

  const dispatch = useDispatch();
  const userID = useSelector((state) => state.users.user.ID);

  const dateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const generateRandomId = (len, arr) => {
    var ans = "";
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    goServer
      .get(
        `/api/clockings/${userID}?startDate=${startDate
          .toISOString()
          .replace(
            /T.+Z$/,
            "T00:00:00.000Z"
          )}&endDate=${endDate
          .toISOString()
          .replace(/T.+Z$/, "T23:59:59.000Z")}`
      )
      .then(
        (response) => {
          const headers = ["ID", "UserID", "ClockIn", "ClockOut"];
          const csvData = response.data.map((row) => [
            row["ID"],
            row["UserID"],
            row["ClockIn"],
            row["ClockOut"],
          ]);
          csvData.unshift(headers);

          setClockingsData(csvData);
          csvBtnRef.current.link.click();
          setIsLoading(false);
        },
        () => {
          dispatch(
            handleOpen({
              type: "error",
              message:
                "Export Failed. Please refresh the page and try again in a few seconds",
            })
          );
        }
      );
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Exporting Data...">
        <div className={classes.mainDivStyle}>
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper elevation={5} className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  Your Historical Data
                </Typography>
                <Divider className={classes.dividerStyle} />
                <figure className={classes.logoFigureStyle}>
                  <img
                    alt="Skylord's Timekeeping Logo"
                    src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                    className={classes.logoImgStyle}
                  />
                </figure>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  align="center"
                  justify="space-between"
                  direction="column"
                >
                  <form className={classes.formStyle} onSubmit={onSubmit}>
                    <DatePicker
                      selected={startDate}
                      onChange={dateChange}
                      startDate={startDate}
                      endDate={endDate}
                      filterDate={(date) => date <= new Date()}
                      selectsRange
                      inline
                      disabledKeyboardNavigation
                    />
                    <Grid
                      container
                      alignItems="center"
                      justify="center"
                      direction="column"
                    >
                      <Paper className={classes.subPaperStyle}>
                        <Grid
                          container
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          alignItems="center"
                          justify="space-between"
                        >
                          <Typography
                            variant="body1"
                            className={classes.textStyle}
                          >
                            <strong>Start Date:</strong>{" "}
                            {startDate ? startDate.toDateString() : null}
                          </Typography>
                          <Typography
                            variant="body1"
                            className={classes.textStyle}
                          >
                            <strong>End Date:</strong>{" "}
                            {endDate ? endDate.toDateString() : null}
                          </Typography>
                        </Grid>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={classes.gridItemStyle}
                      >
                        <Button
                          className={classes.buttonStyle}
                          type="submit"
                          disabled={startDate === null || endDate === null}
                        >
                          Export Data
                        </Button>
                        <CSVLink
                          data={clockingsData}
                          filename={`report-${generateRandomId(
                            20,
                            "12345abcde"
                          )}.csv`}
                          className={classes.hiddenStyle}
                          ref={csvBtnRef}
                          target="_blank"
                        />
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default History;
