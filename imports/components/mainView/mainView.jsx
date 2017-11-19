import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';
import ChartView from '../chartView'
import FontIcon from 'material-ui/FontIcon';

export default class MainView extends React.Component {
    constructor(props)
    {
        super(props);
    }


    render() 
    {
        const iconStyles = {
            marginRight: 24,
          };

        const title = this.props.match.params.id+' '+this.props.match.params.kind;
        return (<div>
            <div div id="title">{title}</div> 

           <div>
           <FontIcon className="material-icons" style={iconStyles}>timeline</FontIcon>
           </div>

        <div id="chart"><ChartView params = {this.props.match.params}/></div>
        </div>)
    }
}
