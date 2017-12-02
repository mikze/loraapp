import GetApiToken from "./getApiToken.jsx";
import { composeWithTracker } from "react-komposer";
import { Measurements } from "../../api/measurements";
import { Meteor } from "meteor/meteor";

const composer = (props, onData) => {
  const subscription = Meteor.subscribe("userToken");

  if (subscription.ready()) {
    const sub = subscription.ready()
    onData(null, { sub });
  }
};

export default composeWithTracker(composer)(GetApiToken);
