import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import goServer from "../../api/goServer";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../../redux/actions/snackbarActions";
import { useStyles } from "./UploadStyles";

const Upload = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");

  const dispatch = useDispatch();
  const userID = useSelector((state) => state.users.user.ID);

  const onSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData();

    formData.set("ClockingsFile", file, { type: "text/csv" });

    goServer
      .post(`/api/clockings/upload-clockings-by-csv/${userID}`, formData)
      .then(
        () => {
          dispatch(
            handleOpen({
              type: "success",
              message: "Upload successful",
            })
          );
          setFile("");
          setIsLoading(false);
        },
        () => {
          dispatch(
            handleOpen({
              type: "error",
              message: "Upload Failed. Refresh the page and try again",
            })
          );
          setFile("");
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
                  <br />*<strong>Max File Size</strong>: 10MB
                  <br />*<strong>Time Format</strong>: yyyy-MM-dd hh:mm:ss
                  <br />
                  (y = year, d = day, M = month, h = hour, m = minute, s =
                  second)
                </Typography>
              </Paper>
            </Grid>
            <form
              className={classes.formStyle}
              onSubmit={onSubmit}
              encType="multipart/form-data"
            >
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
                <input
                  accept="text/csv"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(newFile) => setFile(newFile.target.files[0])}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="contained-button-file"
                  style={{ width: "100%" }}
                >
                  <Button component="span" className={classes.buttonStyle}>
                    Upload Timesheet
                  </Button>
                </label>
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
                <Button
                  className={classes.buttonStyle}
                  type="submit"
                  disabled={file === ""}
                >
                  Process Timesheet
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </LoadingOverlay>
    </div>
  );
};

export default Upload;
