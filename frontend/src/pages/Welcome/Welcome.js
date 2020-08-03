import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./WelcomeStyles";

const Welcome = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Welcome User</Typography>
    </div>
  );
};

export default Welcome;
