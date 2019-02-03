import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

class MyMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 62.31,
      lng: 15.39,
      zoom: 7
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
		<Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      
    );
  }
}

export default MyMap;
