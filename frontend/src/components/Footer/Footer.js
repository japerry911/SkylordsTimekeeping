import React, { useState, useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link, withRouter } from "react-router-dom";
import {
  NONAUTH_ROUTES_ARRAY,
  FOOTER_NONAUTH_POSTION_OBJECT,
  AUTH_ROUTES_ARRAY,
  FOOTER_AUTH_POSTION_OBJECT,
} from "../../router/routeArrsObjs";
import { useSelector } from "react-redux";
import { useStyles } from "./FooterStyles";

const Footer = ({ location }) => {
  const classes = useStyles();

  const isAuthed = useSelector((state) => state.users.authed);
  const userId = useSelector((state) => state.users.user.ID);

  const [value, setValue] = useState(
    !isAuthed && FOOTER_NONAUTH_POSTION_OBJECT[location.pathname] !== undefined
      ? FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]
      : isAuthed && FOOTER_AUTH_POSTION_OBJECT[location.pathname]
      ? FOOTER_AUTH_POSTION_OBJECT[location.pathname]
      : -1
  );

  useEffect(() => {
    if (!isAuthed) {
      setValue(FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]);
    } else {
      const shortenedPath = location.pathname.replace(/\/[0-9]+/g, "");
      setValue(FOOTER_AUTH_POSTION_OBJECT[shortenedPath]);
    }
  }, [location.pathname, isAuthed]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.footerStyle}
    >
      {!isAuthed
        ? NONAUTH_ROUTES_ARRAY.map((routeObject, index) => {
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
                  label: classes.tabTextStyle,
                  wrapper: classes.tabWrapperStyle,
                }}
              />
            );
          })
        : AUTH_ROUTES_ARRAY.map((routeObject, index) => {
            return (
              <BottomNavigationAction
                key={index}
                label={routeObject.title}
                icon={<routeObject.icon />}
                component={Link}
                to={routeObject.path + userId}
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
