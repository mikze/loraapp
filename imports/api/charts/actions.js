import {addNewChart as addNewChartMethod} from './methods.js';

const addNewChart = (chartName, description, lines) =>
new Promise((resolve, reject) => {
    addNewChartMethod.call({chartName, description, lines }, (err, res) => {
        if (err) {
            const error = new Error(err);
            reject(error);
        }
        resolve(res);
    });
});



const actions = {
    addNewChart
};

export { actions };