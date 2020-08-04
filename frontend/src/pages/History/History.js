import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./HistoryStyles";

const History = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">History</Typography>
    </div>
  );
};

export default History;
