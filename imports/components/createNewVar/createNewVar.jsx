import React from "react";
import FlatButton from "material-ui/FlatButton";
import randtoken from "rand-token";
import TextField from "material-ui/TextField";
import { actions } from "/imports/api/measurements/actions.js";

export default class CreateNewVar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartName: "Chart Name",
      dataName: "description",
      xname: "xname",
      xunit: "xunit",
      yname: "yname",
      yunit: "yunit",
      lines: []
    };

    this.createVar = this.createVar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createVar() {
    actions.addNewVar(
      this.props.measurementName,
      this.state.dataName,
      this.state.xname,
      this.state.xunit,
      this.state.yname,
      this.state.yunit
    );
  }

  handleChange = (e, option) => {
    if (option === "dataName") {
      this.setState({ dataName: e.target.value });
    }
    if (option === "xname") {
      this.setState({ xname: e.target.value });
    }
    if (option === "xunit") {
      this.setState({ xunit: e.target.value });
    }
    if (option === "yname") {
      this.setState({ yname: e.target.value });
    }
    if (option === "yunit") {
      this.setState({ yunit: e.target.value });
    }
  };

  render() {
    const styles = {
      chip: {
        margin: 4
      }
    };

    return (
      <div>
        Var Name: <TextField onChange={e => this.handleChange(e, "dataName")} />
        <br />
        X name: <TextField onChange={e => this.handleChange(e, "xname")} />
        <br />
        X unit: <TextField onChange={e => this.handleChange(e, "xunit")} />
        <br />
        Y name: <TextField onChange={e => this.handleChange(e, "yname")} />
        <br />
        Y unit: <TextField onChange={e => this.handleChange(e, "yunit")} />
        <br />
        <FlatButton
          label="Create new Var!"
          primary={true}
          onClick={this.createVar}
        />
      </div>
    );
  }
}
