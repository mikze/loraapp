import React from "react";
import FlatButton from "material-ui/FlatButton";
import randtoken from "rand-token";
import TextField from "material-ui/TextField";
import Chip from "material-ui/Chip";
import { actions } from "/imports/api/measurements/actions.js";

export default class ListOfLines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: props.lines,
      newLine: ""
    };
    this.addLines = this.addLines.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addLines() {
    console.log(this.state.lines);
    const lines = this.state.lines;
    lines.push(this.state.newLine);
    this.setState({ lines });
    actions.addNewLine(this.props.name, this.state.newLine);
  }

  handleChange(e) {
    console.log(e.target.value);
    const newLine = e.target.value;
    this.setState({ newLine });
  }

  render() {
    const styles = {
      chip: {
        margin: 4
      }
    };

    return (
      <div>
        {this.state.lines.map((x, i) => (
          <div>
            {
              <Chip style={styles.chip} onClick={() => this.addLines(x)}>
                {x}
              </Chip>
            }
          </div>
        ))}
        <TextField onChange={e => this.handleChange(e)} />
        <FlatButton label="Add line" primary={true} onClick={this.addLines} />
      </div>
    );
  }
}
