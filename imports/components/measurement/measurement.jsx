import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import ShowData from '../showData'
import ListOfCharts from '../listOfCharts'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class Measurement extends React.Component {

    constructor(props) {
    super(props);
    this.state = {data: props.measurements.data,
                  close: false};

    this.handleOpen = this.handleOpen.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({data:nextProps.measurements.data});
  }

  handleOpen = () => {
    this.state.close ? this.setState({close: false}) : this.setState({close: true});
  };


  render()
    {
    return(<div>{this.props.match.params.id}<br/>
      <FlatButton
      label="Show/Hide Charts List"
      primary={true}
      onClick={(this.handleOpen)}
      />   
           <br/>
           {this.state.close ? <Card><CardHeader
            title="List of measurements"
            />
            <ListOfCharts id={this.props.match.params.id} data={this.state.data}/></Card> : null}
           </div>)
    }
}