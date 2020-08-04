import React, { useState, useEffect, Fragment } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import goServer from "../../api/goServer";
import { useDispatch } from "react-redux";
import { handleOpen, handleClose } from "../../redux/actions/snackbarActions";
import LoadingOverlay from "react-loading-overlay";
import { useStyles } from "./ContactStyles";

const Contact = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      // eslint-disable-next-line
      /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
    ) {
      dispatch(handleClose());
    }
  }, [email, dispatch]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      // eslint-disable-next-line
      !/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
    ) {
      dispatch(handleOpen({ type: "error", message: "Invalid Email" }));
    }

    setIsLoading(true);

    const formData = new FormData();

    formData.set("Email", email);
    formData.set("Subject", subject);
    formData.set("Message", message);

    const result = await goServer.post("/api/contact/send-message", formData);

    if (result) {
      dispatch(
        handleOpen({ type: "success", message: "Message successfully sent" })
      );
    } else {
      dispatch(
        handleOpen({
          type: "error",
          message: "Internal error. Wait a few seconds and then try again",
        })
      );
    }

    setIsLoading(false);
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Sending Message">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            headerText="SIGN IN"
            imgUrl="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/SignIn/anoir-chafik-2_3c4dIFYFU-unsplash.jpg"
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  CONTACT US
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
                  justify="center"
                >
                  <form className={classes.formStyle} onSubmit={onSubmit}>
                    <Paper className={classes.subPaperStyle}>
                      <TextField
                        label="Email"
                        type="text"
                        required
                        onChange={(newEmail) => setEmail(newEmail.target.value)}
                        helperText="Email must be a valid email address"
                        value={email}
                        className={classes.textFieldStyle}
                      />
                      <TextField
                        label="Subject"
                        type="text"
                        required
                        onChange={(newSubject) =>
                          setSubject(newSubject.target.value)
                        }
                        helperText="Password must contain an Uppercase letter, Lowercase letter, Number, and be at least 7 characters long"
                        value={subject}
                        className={classes.textFieldStyle}
                      />
                      <FormControl className={classes.formControlStyle}>
                        <InputLabel
                          shrink={message !== ""}
                          style={{ position: "absolute" }}
                        >
                          Message*
                        </InputLabel>
                        <TextareaAutosize
                          required
                          onChange={(newMessage) =>
                            setMessage(newMessage.target.value)
                          }
                          rowsMin={15}
                          rowsMax={15}
                          className={classes.bigTextFieldStyle}
                        />
                      </FormControl>
                      <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={classes.buttonGridStyle}
                      >
                        <Button
                          className={classes.buttonStyle}
                          disabled={!(email && subject && message)}
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Paper>
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

export default Contact;
