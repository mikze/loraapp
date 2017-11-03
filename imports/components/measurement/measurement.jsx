import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import ShowData from '../showData'
import ListOfCharts from '../listOfCharts'
import ListOfLines from '../listOfLines'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class Measurement extends React.Component {

    constructor(props) {
    super(props);
    this.state = {data: props.measurements.data,
                  lines: props.measurements.lines,
                  closeCharts: false,
                  closeLines: false};

    this.handleOpen = this.handleOpen.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({data:nextProps.measurements.data});
  }

  handleOpen = choice => {
    if(choice === 'charts')
    {
      this.setState({closeLines: false})
      this.state.closeCharts ? this.setState({closeCharts: false}) : this.setState({closeCharts: true});
    }
    if(choice === 'lines')
    {
      this.setState({closeCharts: false})
      this.state.closeLines ? this.setState({closeLines: false}) : this.setState({closeLines: true});
    }
  };


  render()
    {
    return(<div>{this.props.match.params.id}
      <br/>
      {this.props.measurements.description}
      <br/>
      <FlatButton
      label="Show/Hide Charts List"
      primary={true}
      onClick={() => this.handleOpen("charts")}
      />   
      <FlatButton
      label="Show/Add Data Lines"
      primary={true}
      onClick={() => this.handleOpen("lines")}
      />  
           <br/>
           {this.state.closeCharts ? <Card><CardHeader
            title="List of measurements"
            />
            <ListOfCharts lines={this.props.measurements.lines} id={this.props.match.params.id} data={this.state.data}/></Card> : null}
            {this.state.closeLines ? <Card><CardHeader
            title="List of data lines"
            />
            <ListOfLines name={this.props.measurements._id} data={this.state.data} lines={this.state.lines}/></Card> : null}
           </div>)
    }
}