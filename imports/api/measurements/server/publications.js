import { Meteor } from 'meteor/meteor';
import {Measurements} from '../measurements.js'

Meteor.publish( 'measurements', function() {
    return Measurements.find({'ownerId': this.userId});
})