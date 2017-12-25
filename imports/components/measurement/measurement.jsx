import React from "react";
import FlatButton from "material-ui/FlatButton";
import ListOfKind from "../listOfKind";
import ListOfLines from "../listOfLines";
import Dialog from "material-ui/Dialog";
import CreateNewVar from "../createNewVar";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

export default class Measurement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: props.measurements.datas,
      lines: props.measurements.lines,
      closeCharts: false,
      closeLines: false,
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ data: nextProps.measurements.data });
  }

  handleOpen = choice => {
    if (choice === "var") {
      this.setState({ closeLines: false });
      this.state.closeCharts
        ? this.setState({ closeCharts: false })
        : this.setState({ closeCharts: true });
    }
    if (choice === "newvar") {
      this.setState({ open: true });
    }
    if (choice === "lines") {
      this.setState({ closeCharts: false });
      this.state.closeLines
        ? this.setState({ closeLines: false })
        : this.setState({ closeLines: true });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        <div id="title">{this.props.match.params.id}</div>
        <br />
        <div>{this.props.measurements.description}</div>
        <br />
        <FlatButton
          label="Show/Hide measurements"
          primary={true}
          onClick={() => this.handleOpen("var")}
        />
        <FlatButton
          label="Show/Add Data Lines"
          primary={true}
          onClick={() => this.handleOpen("lines")}
        />
        <br />
        {this.state.closeCharts ? (
          <Card>
            <CardHeader title="List of measurements" />
            <FlatButton
              label="Add new variable"
              primary={true}
              onClick={() => this.handleOpen("newvar")}
            />
            <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <CreateNewVar measurementName={this.props.matchingMeasurements} />
            </Dialog>
            <ListOfKind
              id={this.props.match.params.id}
              datas={this.state.datas}
            />
          </Card>
        ) : null}
        {this.state.closeLines ? (
          <Card>
            <CardHeader title="List of data lines" />
            <ListOfLines
              name={this.props.measurements._id}
              datas={this.state.datas}
              lines={this.state.lines}
            />
          </Card>
        ) : null}
      </div>
    );
  }
}
