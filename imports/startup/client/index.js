import { Routes } from "./routes.jsx";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import React from "react";

Meteor.startup(() => {
  render(<Routes />, document.getElementById("App"));
});
