import React, { useState, Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/usersActions";
import { handleOpen } from "../../redux/actions/snackbarActions";
import Spinner from "../../components/Spinner/Spinner";
import { useStyles } from "./SignInStyles";

const SignIn = ({ history }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.loading);

  const handleSignIn = async (event) => {
    event.preventDefault();

    const result = await dispatch(signIn(username, password));

    if (result) {
      dispatch(
        handleOpen({ type: "success", message: "Successfully Authenticated." })
      );
      history.push("/welcome-user");
    } else {
      dispatch(handleOpen({ type: "error", message: "Invalid Credentials." }));
      setUsername("");
      setPassword("");
    }
  };

  useEffect(() => {
    setValidationStatus(username && password);
  }, [username, password]);

  return (
    <div className={classes.mainDivStyle}>
      {isLoading ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
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
                  SIGN IN
                </Typography>
                <Divider className={classes.dividerStyle} />
                <figure className={classes.logoFigureStyle}>
                  <img
                    alt="Skylord's Timekeeping Logo"
                    src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                    className={classes.logoImgStyle}
                  />
                </figure>
                <form className={classes.formStyle} onSubmit={handleSignIn}>
                  <Paper className={classes.subPaperStyle}>
                    <TextField
                      label="Username"
                      type="text"
                      required
                      onChange={(newUsername) =>
                        setUsername(newUsername.target.value)
                      }
                      value={username}
                      className={classes.textFieldStyle}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      required
                      onChange={(newPassword) =>
                        setPassword(newPassword.target.value)
                      }
                      value={password}
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
                        type="submit"
                        disabled={!validationStatus}
                      >
                        Sign In
                      </Button>
                      <Button className={classes.buttonStyle}>
                        Create Account
                      </Button>
                    </Grid>
                  </Paper>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </div>
  );
};

export default SignIn;
