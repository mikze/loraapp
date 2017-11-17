import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {addNewChart as addNewChartSchema,
        addNewMeasurement as addNewMeasurementSchema,
        addNewLine as addNewLineSchema} from './schema.js';
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
            'Could not make new chart',
            'Could not make new chart',
        );
    },
});

export const addNewMeasurement = new ValidatedMethod({
    name: 'measurements.addNewMeasurement',
    validate: addNewMeasurementSchema.validator({ clean: true }),
    run({ id,text,description }) {
        const user = Meteor.user();
        if (user) {
            return Measurements.insert({_id:id, ownerId:Meteor.userId(),data:[],text:text,description:description,charts:[],lines:[]});
        }

        throw new Meteor.Error(
            'Could not make new measurement',
            'Could not make new measurement',
        );
    },
});

export const addNewLine = new ValidatedMethod({
    name: 'measurements.addNewLine',
    validate: addNewLineSchema.validator({ clean: true }),
    run({ measurementName, line }) {
        const user = Meteor.user();
        if (user) {
            return Measurements.update({_id: measurementName }, {$push: {lines: line}});
        }

        throw new Meteor.Error(
            'Could not make new Line',
            'Could not make new Line',
        );
    },
});