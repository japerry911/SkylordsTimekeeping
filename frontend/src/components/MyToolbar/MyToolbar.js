import React, { Fragment, useEffect, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStyles } from "./ToolbarStyles";

const MyToolbar = ({ title, onMenuClick }) => {
  const classes = useStyles();

  const [widthBool, setWidthBool] = useState(window.innerWidth > 500);

  useEffect(() => {
    const resizeListener = () => setWidthBool(window.innerWidth > 500);
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize");
  }, []);

  return (
    <Fragment>
      <AppBar>
        <Toolbar className={classes.toolbarStyle}>
          <figure className={classes.figureStyle}>
            <Link to="/">
              <img
                alt="Skylord's Timekeeping Logo"
                src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                className={classes.logoStyle}
              />
            </Link>
          </figure>
          <div className={classes.rightStyle}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
            {widthBool ? (
              <Typography variant="h6" color="inherit" align="right">
                {title}
              </Typography>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default MyToolbar;
