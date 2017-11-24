import { Meteor } from "meteor/meteor";
import "/imports/api/measurements/server";

import "/imports/api/measurements";

const settings = Meteor.settings.google;

if (settings) {
  ServiceConfiguration.configurations.remove({
    service: "google"
  });

  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: settings.clientId,
    secret: settings.secret
  });
}

Meteor.startup(() => {
  // code to run on server at startup
});
