import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';

export default class GetApiToken extends React.Component {
    constructor(props)
    {
        super(props);
        this.generateToken = this.generateToken.bind(this);
    }

    generateToken() {
        console.log(randtoken.generate(32))
    }

    render() 
    {return (<div><FlatButton label="Default" 
                              onTouchTap={() => this.generateToken()}/></div>)}
}