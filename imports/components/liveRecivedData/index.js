import { LiveRecivedData } from "./liveRecivedData.jsx";
import { composeWithTracker } from "react-komposer";
import { Measurements } from "../../api/measurements";
import { Meteor } from "meteor/meteor";

const composer = (props, onData) => {
  const subscription = Meteor.subscribe("measurements");

  if (subscription.ready()) {
    const measurements = Measurements.find({}).fetch();
    onData(null, { measurements });
  }
};

export default composeWithTracker(composer)(LiveRecivedData);
