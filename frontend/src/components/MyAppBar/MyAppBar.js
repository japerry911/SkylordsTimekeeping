import React, { useState } from "react";
import MyToolbar from "../MyToolbar/MyToolbar";
import MyDrawer from "../MyDrawer/MyDrawer";
import { useStyles } from "./AppBarStyles";

const MyAppBar = () => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer open={drawer} onClose={toggleDrawer} setTitle={setTitle} />
    </div>
  );
};

export default MyAppBar;
