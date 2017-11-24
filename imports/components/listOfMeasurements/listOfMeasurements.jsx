import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import CreateNewMeasurement from "../createNewMeasurement";

export default class ListOfMeasurements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = (
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    );

    return (
      <div>
        <FlatButton
          label="Create New Measurement"
          primary={true}
          onClick={this.handleOpen}
        />

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <CreateNewMeasurement />
        </Dialog>

        {this.props.measurements.map(x => (
          <List>
            <ListItem href={"/measurement/" + x._id} primaryText={x.text} />
          </List>
        ))}
      </div>
    );
  }
}
