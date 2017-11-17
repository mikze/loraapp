import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Charts = new Mongo.Collection('charts');

export { Charts };