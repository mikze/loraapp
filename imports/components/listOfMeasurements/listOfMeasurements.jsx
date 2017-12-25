import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import CreateNewMeasurement from "../createNewMeasurement";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

    const style = {
      marginRight: 20,
    };

    const actions = (
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    );

    return (
      <div>

<FloatingActionButton mini={true} style={style} onClick={this.handleOpen}>
      <ContentAdd />
    </FloatingActionButton>

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
            <ListItem href={"/measurement/" + x._id} primaryText={x._id} />
          </List>
        ))}
      </div>
    );
  }
}
