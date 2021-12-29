import React from "react";
import { Spinner } from "react-bootstrap";
import {Route,Redirect,
} from "react-router-dom";
// import useAuth from "../../Hook/useAuth";
import useFirebase from "../../Hook/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;