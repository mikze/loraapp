import React from "react";
import { Route, Redirect } from "react-router-dom";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
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

    const style = {
      margin: 12,
    };
    
    return (
      <div>
        <Toolbar>
          <MenuItem href={"/gettoken"}>Get Token</MenuItem>
          <MenuItem href={"/listofmeasurements"}>List of measurements</MenuItem>
          <RaisedButton label="Logout" secondary={true} style={style} href={"/logout"}/>
        </Toolbar>
      </div>
    );
  }
}
