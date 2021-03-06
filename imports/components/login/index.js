import { Meteor } from "meteor/meteor";
import { composeWithTracker } from "react-komposer";

import Login from "./login.jsx";

const composer = ({ router }, onData) => {
  const user = Meteor.user();

  const onGoogleLogin = () =>
    Meteor.loginWithGoogle({}, error => {
      if (error) {
        const errorMessage = error.message ? error.message : error;
        onData(null, { onGoogleLogin, errorMessage });
      }
    });

  onData(null, {
    onGoogleLogin,
    user
  });
};

export default composeWithTracker(composer)(Login);
