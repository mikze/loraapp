import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import ShowData from '../showData'



export default class Measurement extends React.Component {

    constructor(props) {
    super(props);
    this.state = {data: props.measurements.data};
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({data:nextProps.measurements.data});
  }

  render()
    {
    return(<div>{this.props.match.params.id}<br/>
           <div id="chart"><ShowData data={this.state.data}/></div>
           </div>)
    }
}