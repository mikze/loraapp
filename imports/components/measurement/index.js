import Measurement from './measurement.jsx'
import { composeWithTracker } from 'react-komposer';
import { Measurements } from '../../api/measurements'
import { Meteor } from 'meteor/meteor';

const composer = ( props, onData ) => {
  
  const subscription = Meteor.subscribe( 'measurements' );
  const matchingMeasurements = props.match.params.id;

  if ( subscription.ready() ) {
    const measurements = Measurements.find({_id: matchingMeasurements}).fetch();
    onData( null, {measurements} );
  }
};

export default composeWithTracker( composer )( Measurement );