import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./CreateAccountStyles";

const CreateAccount = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Create Account Page</Typography>
    </div>
  );
};

export default CreateAccount;
