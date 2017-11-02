import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';
import { actions } from '/imports/api/measurements/actions.js';

export default class CreateNewMeasurement extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
                      Id:'Id', 
                      Text:'Text',
                      Description:'Description'
        };
        this.handleChange = this.handleChange.bind(this);
        this.createMeasurement = this.createMeasurement.bind(this);
    }

    handleChange = (e,option) => {
        option === 'Id' ? this.setState({Id: e.target.value}) : 
        option === 'Text' ? this.setState({Text: e.target.value}) :
        this.setState({Description: e.target.value});
      }
      createMeasurement()
      {
          console.log(this.state.Id+' '+this.state.Text+' '+this.state.Description);
          actions.addNewMeasurement(this.state.Id,this.state.Text,this.state.Description);
      }

    render() 

    {return <div>CreateNewMeasurement<br/>
            Measurement Id: <TextField
            onChange={e=>this.handleChange(e,'Id')}
            />
            <br/>
            Measurement Text: <TextField
            onChange={e=>this.handleChange(e,'Text')}
           />
           <br/>
            Measurement Description: <TextField
            onChange={e=>this.handleChange(e,'Desc')}
           />
           <br/>
           <FlatButton
            label="Create new Measurement!"
            primary={true}
            onClick={this.createMeasurement}
          />
        </div>}
}