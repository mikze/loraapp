import { Meteor } from "meteor/meteor";

Meteor.publish("userToken", function() {

    const query = {};

    const options = {
        fields: {
            "profile.token": 1
        },
    };

    return Meteor.users.find(query, options);
});

