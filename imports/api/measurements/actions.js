import {
  addNewVar as addNewVarMethod,
  addNewMeasurement as addNewMeasurementMethod,
  addNewLine as addNewLineMethod
} from "./methods.js";

const addNewVar = (measurementName, dataName, xname, xunit, yname, yunit) =>
  new Promise((resolve, reject) => {
    addNewVarMethod.call(
      { measurementName, dataName, xname, xunit, yname, yunit },
      (err, res) => {
        if (err) {
          const error = new Error(err);
          reject(error);
        }
        resolve(res);
      }
    );
  });

const addNewMeasurement = (id, text, description) =>
  new Promise((resolve, reject) => {
    addNewMeasurementMethod.call({ id, text, description }, (err, res) => {
      if (err) {
        const error = new Error(err);
        reject(error);
      }
      resolve(res);
    });
  });

const addNewLine = (measurementName, line) =>
  new Promise((resolve, reject) => {
    addNewLineMethod.call({ measurementName, line }, (err, res) => {
      if (err) {
        const error = new Error(err);
        reject(error);
      }
      resolve(res);
    });
  });

const actions = {
  addNewVar,
  addNewMeasurement,
  addNewLine
};

export { actions };
