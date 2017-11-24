import React from "react";
import FlatButton from "material-ui/FlatButton";
import randtoken from "rand-token";
import TextField from "material-ui/TextField";
import Chip from "material-ui/Chip";
import Chart from "./chart.jsx";
import { blue300 } from "material-ui/styles/colors";

export default class ChartView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      open: false,
      create: false,
      params: ["xD"],
      addedLines: [],
      lines: props.lines,
      description: "description",
      name: "Chart name"
    };

    this.addLines = this.addLines.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ data: nextProps.data });
  }

  addLines(x) {
    const addedLines = this.state.addedLines;
    const lines = this.state.lines;
    const index = lines.indexOf(x);
    lines.splice(index, 1);
    addedLines.push(x);
    this.setState({ addedLines }, this.setState({ lines }));
    //   actions.addNewLine(this.props.name,this.state.newLine);
  }

  removeLines(x) {
    const addedLines = this.state.addedLines;
    const lines = this.state.lines;
    const index = addedLines.indexOf(x);
    addedLines.splice(index, 1);
    lines.push(x);
    this.setState({ addedLines }, this.setState({ lines }));
    //   actions.addNewLine(this.props.name,this.state.newLine);
  }

  render() {
    const styles = {
      chip: {
        margin: 4
      }
    };

    return (
      <div>
        <Chart
          data={this.state.data}
          params={this.state.params}
          lines={this.state.addedLines}
        />

        {this.state.lines.map((x, i) => (
          <div>
            {
              <Chip style={styles.chip} onClick={() => this.addLines(x)}>
                {x}
              </Chip>
            }
          </div>
        ))}

        {this.state.addedLines.map((x, i) => (
          <div>
            {
              <Chip
                style={styles.chip}
                backgroundColor={blue300}
                onRequestDelete={() => this.removeLines(x)}
              >
                {x}
              </Chip>
            }
          </div>
        ))}
      </div>
    );
  }
}
