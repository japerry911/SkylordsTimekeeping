import React, { Fragment } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../redux/actions/snackbarActions";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ToastBar = () => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector((state) => state.snackbar);

  const handleClick = (_, reason) => {
    dispatch(handleClose(reason));
  };

  return (
    <Fragment>
      <Snackbar open={open} onClose={handleClick}>
        <Alert severity={type} onClose={handleClick}>
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default ToastBar;
