import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { addNewToken as addNewTokenSchema } from "./schema.js";

export const addNewToken = new ValidatedMethod({
  name: "users.addNewToken",
  validate: addNewTokenSchema.validator({ clean: true }),
  run({ token }) {
    const user = Meteor.user();
    const sub = Meteor.subscribe('userToken').ready();
    if (user && sub) {
        Meteor.users.update({ _id: Meteor.userId() }, {$set: {"profile.token": token} });
    }

    throw new Meteor.Error("Could not make change token");
  }
});
