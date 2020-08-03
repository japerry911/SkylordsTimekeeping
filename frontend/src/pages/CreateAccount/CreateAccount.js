import React, { useState, useEffect } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleOpen, handleClose } from "../../redux/actions/snackbarActions";
import goServer from "../../api/goServer";
import { useStyles } from "./CreateAccountStyles";

const CreateAccount = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  useEffect(() => {
    if (username.length >= 7) {
      dispatch(handleClose());
    }
  }, [username]);

  useEffect(() => {
    if (
      password === confirmPassword &&
      /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{7,}$/.test(password)
    ) {
      dispatch(handleClose());
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      if (password.length >= 7 && password === confirmPassword) {
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Password must contain 1 Uppercase/Lowercase Letter, 1 Number, and must be at least 7 characters long.",
          })
        );
      }
    }
  }, [password, confirmPassword, dispatch]);

  useEffect(() => {
    if (
      email &&
      /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/.test(email)
    ) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  }, [email]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate that username meets length requirement
    if (!/^[0-9a-zA-Z]{6,}$/.test(username)) {
      dispatch(
        handleOpen({
          type: "error",
          message:
            "Username must be at least 7 characters (letters and numbers only)",
        })
      );
      return;
    }

    // Validate that username exists
    const response = await goServer.get(
      `/api/users/if-exists-by-username/${username}`
    );
    if (response.status === 202) {
      dispatch(
        handleOpen({
          type: "error",
          message: "Username already exists, please try a different username",
        })
      );
      return;
    }
  };

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText="SIGN IN"
        imgUrl="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/SignIn/anoir-chafik-2_3c4dIFYFU-unsplash.jpg"
      />
      <Grid container justify="center" className={classes.mainContainerStyle}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Paper className={classes.paperStyle}>
            <Typography variant="h2" className={classes.titleStyle}>
              CREATE ACCOUNT
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
                    label="Username"
                    type="text"
                    required
                    onChange={(newUsername) =>
                      setUsername(newUsername.target.value)
                    }
                    helperText="Username must be at least 7 characters long"
                    value={username}
                    className={classes.textFieldStyle}
                  />
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
                    label="Password"
                    type="password"
                    required
                    onChange={(newPassword) =>
                      setPassword(newPassword.target.value)
                    }
                    helperText="Password must contain an Uppercase letter, Lowercase letter, Number, and be at least 7 characters long"
                    value={password}
                    className={classes.textFieldStyle}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={(newConfirmPassword) =>
                      setConfirmPassword(newConfirmPassword.target.value)
                    }
                    value={confirmPassword}
                    className={classes.textFieldStyle}
                  />
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
                      component={Link}
                      to="sign-in"
                    >
                      Existing User
                    </Button>
                    <Button
                      className={classes.buttonStyle}
                      disabled={
                        !(username && emailValidation && passwordValidation)
                      }
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </Grid>
                </Paper>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateAccount;
