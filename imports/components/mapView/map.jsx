import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Chip from "material-ui/Chip";
import { blue300 } from "material-ui/styles/colors";

export class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      lines: props.lines,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({allData:nextProps.data},
    this.setState({lines:nextProps.lines}));
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.data);
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
          <Map google={this.props.google} zoom={this.props.aaa} onClick={this.onMapClicked}>
            {this.state.lines.map((x, i) => (
              <Marker
                name={x}
                position={{ lat: 37.759703, lng: -122.428093 }}
                onClick={this.onMarkerClick}
              />
            ))}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
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
