import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./HomeStyles";

const Home = () => {
  const classes = useStyles();

  return <div className={classes.mainDivStyle}></div>;
};

export default Home;
