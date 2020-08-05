import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Divider from "@material-ui/core/Divider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import { useStyles } from "./HistoryStyles";

const History = () => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText="HISTORICAL DATA"
        imgUrl="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/History/pexels-lukas-590022.jpg"
      />
      <Grid container justify="center" className={classes.mainContainerStyle}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Paper className={classes.paperStyle}>
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
              <form className={classes.formStyle}>
                <DatePicker
                  selected={false}
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
                      <Typography variant="body1" className={classes.textStyle}>
                        <strong>Start Date:</strong>{" "}
                        {startDate ? startDate.toDateString() : null}
                      </Typography>
                      <Typography variant="body1" className={classes.textStyle}>
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
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default History;
