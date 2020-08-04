import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./UploadStyles";

const Upload = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Upload</Typography>
    </div>
  );
};

export default Upload;
