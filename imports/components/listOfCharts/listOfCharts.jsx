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
            create:false,
            params: ['xD'],
            lines: [],
          };
    
                this.handleOpen = this.handleOpen.bind(this);
                this.handleClose = this.handleClose.bind(this);
                this.handleCreate = this.handleCreate.bind(this);
                this.handleCreateClose = this.handleCreateClose.bind(this);
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

  handleCreate = () => {
    this.setState({create: true});
  };

  handleCreateClose = () => {
    this.setState({create: false});
  };

render()
{

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCreateClose}
      />,
      ];

    return(<div>
        
        <FlatButton
        label="Create New Chart"
        primary={true}
        onClick={(this.handleCreate)}
        />
        
        {this.props.measurements.map(x => <List><ListItem primaryText={x.name} onClick={() => this.handleOpen(x.lines)}/></List>)} 
        
        <Dialog
        title="Dialog With Actions"
        actions={actions[1]}
        modal={false}
        open={this.state.create}
        onRequestClose={this.handleCreateClose}
      >
      Create new chart
      </Dialog>

    <Dialog
    title="Dialog With Actions"
    actions={actions[0]}
    modal={false}
    open={this.state.open}
    onRequestClose={this.handleClose}
  >
  <Chart data={this.state.data} params={this.state.params} lines={this.state.lines}/>
  </Dialog>
    
    </div>)
}
}


 