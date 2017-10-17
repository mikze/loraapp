import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, navigate:false};
    console.log(this.props.logout)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {

    if (this.state.navigate) {
      this.props.logout();
      return <Redirect to="/login" push={true} />
    }

    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Get Token</MenuItem>
          <MenuItem onClick={() => this.setState({ navigate: true })}>Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}

