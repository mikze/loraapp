import React from "react";
import FlatButton from "material-ui/FlatButton";
import randtoken from "rand-token";
import TextField from "material-ui/TextField";
import ChartView from "../chartView";
import MapView from "../mapView";
import FontIcon from "material-ui/FontIcon";
import Toggle from "material-ui/Toggle";

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = () =>{
      const swap = !this.state.swap;
      this.setState({swap});
  }
  render() {
    const styles = {
        block: {
          maxWidth: 250,
        },
        toggle: {
          marginBottom: 16,
        }
    }
    const title =
      this.props.match.params.id + " " + this.props.match.params.kind;
    return (
      <div>
        <Toggle label="Simple" style={styles.toggle} onToggle={this.onToggle}/>

        <div div id="title">
          {title}
        </div>

        {this.state.swap ? (
          <div id="chart">
            <ChartView params={this.props.match.params} />
          </div>
        ) : (
          <div>
            <MapView params={this.props.match.params} aaa={1} />
          </div>
        )}
      </div>
    );
  }
}
