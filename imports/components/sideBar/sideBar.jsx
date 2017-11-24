import React from "react";
import { Route, Redirect } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <RaisedButton label="|||" onClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem href={"/gettoken"}>Get Token</MenuItem>
          <MenuItem href={"/listofmeasurements"}>List of measurements</MenuItem>
          <MenuItem href={"/recived/1"}>recived</MenuItem>
          <MenuItem href={"/logout"}>Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}
