import React from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';

export default ListOfMeasurements = props => {
    
    console.log(props.measurements);
    return(<div>{props.measurements.map(x =>  <List><ListItem href="/gettoken" primaryText={x.text} /></List>)} </div>)
}