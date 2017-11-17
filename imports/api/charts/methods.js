import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {addNewChart as addNewChartSchema} from './schema.js';
import {Charts} from './charts.js'


export const addNewChart = new ValidatedMethod({
    name: 'charts.addNewChart',
    validate: addNewChartSchema.validator({ clean: true }),
    run({ name,description,data }) {
        const user = Meteor.user();
        if (user) {
            return Charts.insert({_id:id, ownerId:Meteor.userId(),data:data,description:description});
        }

        throw new Meteor.Error(
            'Could not make new measurement',
            'Could not make new measurement',
        );
    },
});
