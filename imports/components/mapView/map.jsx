import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Chip from "material-ui/Chip";
import { blue300 } from "material-ui/styles/colors";

export class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ data: nextProps.data });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const styles = {
      chip: {
        margin: 4
      }
    };

    const data = this.state.allData;

    return (
      <div>
        <div id="map">
          <Map
            google={this.props.google}
            zoom={this.props.aaa}
            onClick={this.onMapClicked}
          >
            {this.props.lines.map(line =>
              this.state.data.data[line].map(singleMeasurement => (
                <Marker
                  name={line}
                  yvalue={singleMeasurement.y}
                  xvalue={singleMeasurement.x}
                  date={singleMeasurement.date}
                  yname={singleMeasurement.yname}
                  xname={singleMeasurement.xname}
                  position={{
                    lat: singleMeasurement.l,
                    lng: singleMeasurement.a
                  }}
                  onClick={this.onMarkerClick}
                />
              ))
            )}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                {this.state.data.yname} {this.state.selectedPlace.yvalue}{" "}
                {this.state.data.yunit}
                <br />
                {this.state.data.xname} {this.state.selectedPlace.xvalue}{" "}
                {this.state.data.xunit}
                <br />
                Date: {this.state.selectedPlace.date}
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAdwMVrZ0IObL2EYODKla-lmluaYViW3KQ"
})(MyMap);
