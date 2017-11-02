import {addNewChart as addNewChartMethod,
    addNewMeasurement as addNewMeasurementMethod,
    addNewLine as addNewLineMethod} from './methods.js';

const addNewChart = (measurementName, chartName, description, lines) =>
new Promise((resolve, reject) => {
    addNewChartMethod.call({measurementName, chartName, description, lines }, (err, res) => {
        if (err) {
            const error = new Error(err);
            reject(error);
        }
        resolve(res);
    });
});

const addNewMeasurement = (id,text,description) =>
new Promise((resolve, reject) => {
    addNewMeasurementMethod.call({id,text,description}, (err, res) => {
        if (err) {
            const error = new Error(err);
            reject(error);
        }
        resolve(res);
    });
});

const addNewLine = (measurementName, line) =>
new Promise((resolve, reject) => {
    addNewLineMethod.call({measurementName, line}, (err, res) => {
        if (err) {
            const error = new Error(err);
            reject(error);
        }
        resolve(res);
    });
});


const actions = {
    addNewChart,
    addNewMeasurement
};

export { actions };