import React, { useState, useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link, withRouter } from "react-router-dom";
import {
  NONAUTH_ROUTES_ARRAY,
  FOOTER_NONAUTH_POSTION_OBJECT,
} from "../../router/routeArrsObjs";
import { useStyles } from "./FooterStyles";

const Footer = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = useState(
    FOOTER_NONAUTH_POSTION_OBJECT[location.pathname] !== undefined
      ? FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]
      : -1
  );

  useEffect(() => {
    setValue(FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]);
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.footerStyle}
    >
      {NONAUTH_ROUTES_ARRAY.map((routeObject, index) => {
        return (
          <BottomNavigationAction
            key={index}
            label={routeObject.title}
            icon={<routeObject.icon />}
            component={Link}
            to={routeObject.path}
            className={classes.tabStyle}
            classes={{
              selected: classes.tabSelectedStyle,
            }}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default withRouter(Footer);
