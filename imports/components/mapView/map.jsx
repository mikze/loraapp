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
    this.setState(
      { allData: nextProps.data },
      this.setState({ lines: nextProps.lines })
    );
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
    console.log("chuj ", this.state.data.data.Ard2);
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
            {this.state.lines.map((x, i) =>
              this.state.data.data[x].map(y => (
                <Marker
                  name={x}
                  yvalue={y.y}
                  xvalue={y.x}
                  date={y.date}
                  yname={y.yname}
                  xname={y.xname}
                  position={{ lat: y.l, lng: y.a }}
                  onClick={this.onMarkerClick}
                >
                  No elo
                </Marker>
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
