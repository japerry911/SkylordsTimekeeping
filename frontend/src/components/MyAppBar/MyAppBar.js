import React, { useState, useEffect } from "react";
import MyToolbar from "../MyToolbar/MyToolbar";
import MyDrawer from "../MyDrawer/MyDrawer";
import { withRouter } from "react-router-dom";
import { ROUTES_OBJECT } from "../../router/routeArrsObjs";
import { useStyles } from "./AppBarStyles";

const MyAppBar = ({ location }) => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState(
    ROUTES_OBJECT[location.pathname] === undefined
      ? "Unknown Page"
      : ROUTES_OBJECT[location.pathname]
  );

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    setTitle(ROUTES_OBJECT[location.pathname]);
  }, [location.pathname]);

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer open={drawer} onClose={toggleDrawer} />
    </div>
  );
};

export default withRouter(MyAppBar);
