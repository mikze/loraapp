import React from "react";
import { Route, Redirect } from "react-router-dom";

export default (Logout = props => {
  props.logout();
  return (
    <div>
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
      Logging out
    </div>
  );
});
