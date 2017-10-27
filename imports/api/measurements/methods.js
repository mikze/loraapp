import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {addNewChart as addNewChartSchema} from './schema.js';
import {Measurements} from './measurements.js'

export const addNewChart = new ValidatedMethod({
    name: 'measurements.addNewChart',
    validate: addNewChartSchema.validator({ clean: true }),
    run({ measurementName, chartName, description, lines }) {
        const user = Meteor.user();
        if (user) {
            return Measurements.update({_id: measurementName }, {$push: {charts: {name: chartName ,description: description, lines: lines}}});
        }

        throw new Meteor.Error(
            'no-permissions-to-set-admin',
            'You do not have permission to set admin',
        );
    },
});