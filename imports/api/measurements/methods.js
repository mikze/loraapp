import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import {
  addNewVar as addNewVarSchema,
  addNewMeasurement as addNewMeasurementSchema,
  addNewLine as addNewLineSchema
} from "./schema.js";
import { Measurements } from "./measurements.js";

export const addNewVar = new ValidatedMethod({
  name: "measurements.addNewVar",
  validate: addNewVarSchema.validator({ clean: true }),
  run({ measurementName, dataName, xname, xunit, yname, yunit }) {
    const user = Meteor.user();
    const lines = Measurements.findOne({ _id: measurementName }).lines;
    const data = {};

    lines.map(x => (data[x] = []));

    if (user) {
      return Measurements.update(
        { _id: measurementName },
        {
          $push: {
            datas: {
              dataName: dataName,
              xname: xname,
              xunit: xunit,
              yname: yname,
              yunit: yunit,
              data: data
            }
          }
        }
      );
    }

    throw new Meteor.Error(
      "Could not make new chart",
      "Could not make new chart"
    );
  }
});

export const addNewMeasurement = new ValidatedMethod({
  name: "measurements.addNewMeasurement",
  validate: addNewMeasurementSchema.validator({ clean: true }),
  run({ id, text, description }) {
    const user = Meteor.user();
    if (user) {
      return Measurements.insert({
        _id: id,
        ownerId: Meteor.userId(),
        text: text,
        description: description,
        lines: [],
        datas: []
      });
    }

    throw new Meteor.Error(
      "Could not make new measurement",
      "Could not make new measurement"
    );
  }
});

export const addNewLine = new ValidatedMethod({
  name: "measurements.addNewLine",
  validate: addNewLineSchema.validator({ clean: true }),
  run({ measurementName, line }) {
    const user = Meteor.user();
    const whatToDo = () => {
      Measurements.update({ _id: measurementName }, { $push: { lines: line } });
      const datas = Measurements.findOne({ _id: measurementName }).datas;

      datas.map(x => (x.data[line] = []));
      Measurements.update({ _id: measurementName }, { $set: { datas: datas } });
    };
    if (user) {
      return whatToDo();
    }

    throw new Meteor.Error(
      "Could not make new Line",
      "Could not make new Line"
    );
  }
});
