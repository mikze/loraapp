import ChartView from "./chartView.jsx";
import { composeWithTracker } from "react-komposer";
import { Measurements } from "../../api/measurements";
import { Meteor } from "meteor/meteor";

const composer = (props, onData) => {
  const subscription = Meteor.subscribe("measurements");
  const matchingMeasurements = props.params.id;
  const matchingKind = props.params.kind;

  if (subscription.ready()) {
    let data = [];
    let lines = [];
    const measurement = Measurements.findOne({ _id: matchingMeasurements });
    const datas = measurement.datas;
    datas.map(x => (x.dataName === matchingKind ? (data = x) : null));
    lines = measurement.lines;
    onData(null, { lines, data });
  }
};

export default composeWithTracker(composer)(ChartView);
