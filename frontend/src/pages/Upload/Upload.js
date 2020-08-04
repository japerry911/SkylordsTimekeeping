import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useStyles } from "./UploadStyles";

const Upload = () => {
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
                UPLOAD
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
            >
              <Paper className={classes.subPaperStyle}>
                <Typography
                  variant="body1"
                  className={classes.textStyle}
                  display="inline"
                >
                  You may upload a TimeSheet file here. <br />
                  <br />
                  The file must <strong>only</strong> be 2 columns with data{" "}
                  <strong>only</strong> in columns A and B: A.) Clock In, and
                  B.) Clock Out. <br />
                  <br />
                  Do <strong>not</strong> include the column headers/titles,
                  only the Clock In/Out data.
                  <br />
                  <br />
                  ***Max File Size: 10MB
                </Typography>
              </Paper>
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
              <Paper className={classes.subPaperCenteredStyle}>
                <Button className={classes.buttonStyle} component="label">
                  Upload Clocking Sheet
                  <input type="file" className={classes.fileInputStyle} />
                </Button>
              </Paper>
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
              <Paper className={classes.subPaperCenteredStyle}>
                <Button className={classes.buttonStyle}>
                  Process Timesheet
                </Button>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </LoadingOverlay>
    </div>
  );
};

export default Upload;
