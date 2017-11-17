import { Meteor } from 'meteor/meteor';
import {Charts} from '../charts.js';

Meteor.publish( 'charts', function() {
    return Charts.find({'ownerId': this.userId});
})