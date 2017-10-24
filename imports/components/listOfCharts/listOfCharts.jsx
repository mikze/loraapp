import React from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chart from '../chart'

export default class ListOfCharts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            open: false,
            params: ['xD'],
            lines: [],
          };
    
                this.handleOpen = this.handleOpen.bind(this);
                this.handleClose = this.handleClose.bind(this);
      }

      componentWillReceiveProps(nextProps, nextState) {
        this.setState({data:nextProps.data});
      }

handleOpen = lines => {
    this.setState({lines},
        this.setState({open: true}));
  };

  handleClose = () => {
    this.setState({open: false});
  };

render()
{
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
      ];

    return(<div>{this.props.measurements.map(x => <List><ListItem primaryText={x.name} onClick={() => this.handleOpen(x.lines)}/></List>)} 
    
    <Dialog
    title="Dialog With Actions"
    actions={actions}
    modal={false}
    open={this.state.open}
    onRequestClose={this.handleClose}
  >
  <Chart data={this.state.data} params={this.state.params} lines={this.state.lines}/>
  </Dialog>
    </div>)
}
}


 