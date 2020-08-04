import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ClockingStyles";

const Clocking = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Clocking</Typography>
    </div>
  );
};

export default Clocking;
