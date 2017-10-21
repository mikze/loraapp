import React from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';

export default ListOfMeasurements = props => 
<div>{props.measurements.map(x => <List><ListItem href={"/measurement/"+x._id} primaryText={x.text} /></List>)}</div>