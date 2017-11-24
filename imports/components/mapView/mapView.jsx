import React, { Component } from "react";
import Chip from "material-ui/Chip";
import { blue300 } from "material-ui/styles/colors";
import GoogleApiWrapper from "./map.jsx";

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: props.data,
      addedLines: [],
      lines: props.lines,
      params: props.params
    };

    this.addLines = this.addLines.bind(this);
    this.removeLines = this.removeLines.bind(this);
  }

  addLines(x) {
    const addedLines = this.state.addedLines;
    const lines = this.state.lines;
    const index = lines.indexOf(x);
    lines.splice(index, 1);
    addedLines.push(x);
    this.setState({ addedLines }, this.setState({ lines }));
  }

  removeLines(x) {
    const addedLines = this.state.addedLines;
    const lines = this.state.lines;
    const index = addedLines.indexOf(x);
    addedLines.splice(index, 1);
    lines.push(x);
    this.setState({ addedLines }, this.setState({ lines }));
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState(
      { allData: nextProps.data },
      this.setState({ lines: nextProps.lines })
    );
  }

  render() {
    const styles = {
      chip: {
        margin: 4
      }
    };

    const data = this.state.allData;

    return (
      <div>
        <GoogleApiWrapper lines={this.state.addedLines} data={this.state.allData} />
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
