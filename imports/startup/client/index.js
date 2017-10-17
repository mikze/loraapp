import { Routes } from './routes.jsx';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from "react";

import { composeWithTracker } from 'react-komposer';
import { Measurements } from '../../api/measurements'

Meteor.startup(() => {
  
  render(<Routes />,document.getElementById("App"));
});



const composer = ( props, onData ) => {
  const subscription = Meteor.subscribe( 'measurements' );

  if ( subscription.ready() ) {
    const measurements = Measurements.find({}).fetch();
    onData( null, {measurements} );
  }
};

export default composeWithTracker( composer )( Routes );