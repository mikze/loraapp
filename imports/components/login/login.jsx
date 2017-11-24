import React from "react";
import FlatButton from "material-ui/FlatButton";
import { Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";

export default (Login = props =>
  props.user ? (
    <Redirect
      to={{
        pathname: "/gettoken",
        state: { from: props.location }
      }}
    />
  ) : (
    <div id="center">
      <FlatButton
        label="Login With Google"
        onTouchTap={() => props.onGoogleLogin()}
      />
    </div>
  ));
