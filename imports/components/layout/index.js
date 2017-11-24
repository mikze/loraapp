import Layout from "./layout.jsx";
import { Meteor } from "meteor/meteor";
import { composeWithTracker } from "react-komposer";

const composer = ({ router }, onData) => {
  const userId = Meteor.user();

  onData(null, {
    userId
  });
};

export default composeWithTracker(composer)(Layout);
