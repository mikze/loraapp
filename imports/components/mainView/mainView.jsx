import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';
import ChartView from '../chartView'
import MapView from '../mapView'
import FontIcon from 'material-ui/FontIcon';


export default class MainView extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            swap : false
        }
    }

    
    render() 
    {
        const iconStyles = {
            marginRight: 24,
          };

        const title = this.props.match.params.id+' '+this.props.match.params.kind;
        return (<div>
            <div div id="title">{title}</div> 

        {this.state.swap ? <div id="chart"><ChartView params = {this.props.match.params}/></div> : 
        <div><MapView params = {this.props.match.params} aaa={1}/></div>}
        

        
        </div>)
    }
}
