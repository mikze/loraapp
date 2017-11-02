import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Measurements = new Mongo.Collection('measurements');

export { Measurements };