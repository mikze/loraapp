import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';
import { actions } from '/imports/api/measurements/actions.js';

export default class ListOfLines extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.info = this.info.bind(this);
        
    }

    info()
    {

    }

    render() 

    {return <div>
        { this.props.lines.map((x,i)=>(<div>{JSON.stringify(x)}<br/></div>)) }
    </div>}
}