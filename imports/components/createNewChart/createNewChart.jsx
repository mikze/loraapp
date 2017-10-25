import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';

export default class CreateNewChart extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.createChart = this.createChart.bind(this);
    }

    createChart()
    {
        console.log(this.props.data);
    }

    render() 
    {
        return (<div><FlatButton
            label="Create new CHART!"
            primary={true}
            onClick={this.createChart}
          />
          </div>)}
}