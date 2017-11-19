import ListOfCharts from './listOfCharts.jsx'
import { composeWithTracker } from 'react-komposer';
import { Measurements } from '../../api/measurements'
import { Meteor } from 'meteor/meteor';

const composer = ( props, onData ) => {
    
    const subscription = Meteor.subscribe( 'measurements' );
    const matchingMeasurements = props.match.params.id;
    const matchingKind = props.match.params.kind;
  
    if ( subscription.ready() ) {
      let data = [];
      let charts= [];
      const measurement = Measurements.findOne({_id: matchingMeasurements});
      const datas = measurement.datas;
      datas.map( x => x.dataName === matchingKind ? data = x.data : null)
      datas.map( x => x.dataName === matchingKind ? charts = x.charts : null)
      onData( null, {charts,data} );
    }
  };

export default composeWithTracker( composer )( ListOfCharts );