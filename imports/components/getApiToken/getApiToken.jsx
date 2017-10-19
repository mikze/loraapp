import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';

export default class GetApiToken extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {token:'token'};
        this.generateToken = this.generateToken.bind(this);
    }

    generateToken() {
        this.setState({ token: randtoken.generate(24) })
        
    }

    render() 
    {return (<div id="center">
                              <FlatButton label="Generate token" 
                              onTouchTap={() => this.generateToken()}/>
                              <TextField id="text-field-default" value={this.state.token} /></div>)}
}