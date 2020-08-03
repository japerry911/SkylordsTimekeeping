import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const isAuthed = useSelector((state) => state.users.authed);
  const { component: Component, ...propElements } = props;

  return (
    <Route
      {...propElements}
      render={(propElements) =>
        isAuthed ? <Component {...propElements} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default ProtectedRoute;
