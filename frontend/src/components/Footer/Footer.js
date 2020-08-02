import React, { useState } from "react";
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
    FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]
      ? FOOTER_NONAUTH_POSTION_OBJECT[location.pathname]
      : -1
  );

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {NONAUTH_ROUTES_ARRAY.map((routeObject, index) => {
        return (
          <BottomNavigationAction
            key={index}
            label={routeObject.title}
            icon={<routeObject.icon />}
            component={Link}
            to={routeObject.path}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default withRouter(Footer);
