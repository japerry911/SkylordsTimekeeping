import React, { useState, useEffect, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

const ProtectedRoute = (props) => {
  const isAuthed = useSelector((state) => state.users.authed);
  const userId = useSelector((state) => state.users.user.ID);
  const { component: Component, ...propElements } = props;
  const [authBool, setAuthBool] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (userId !== Number(props.computedMatch.params.userId) || !isAuthed) {
      setAuthBool(false);
      setIsLoading(false);
    } else {
      setAuthBool(true);
      setIsLoading(false);
    }
  }, [userId, isAuthed, props.computedMatch.params.userId]);

  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#a1a8b6",
            height: "100%",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <Route
          {...propElements}
          render={(propElements) =>
            authBool ? (
              <Component {...propElements} />
            ) : (
              <Redirect to="/sign-in" />
            )
          }
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
