import React from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import { fetch } from "whatwg-fetch";
// import JsonMarkers from "../data/markers.json";
import Markers from "./marker";
import MarkerClusterGroup from "react-leaflet-markercluster/dist/react-leaflet-markercluster";

import "./map.css";

class MyMap extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         lat: 62.31,
         lng: 15.39,
         zoom: 7,
         markers: [],
         onlyUserMarkers: true,
      };
   }

   // Load markers into state
   componentDidMount() {
      // this.setState({ markers: JsonMarkers.marker });
      // "https://skoterleder.org/inc/getmarker.php?id=281"

      fetch("https://test.skoterleder.org/inc/data-icon-string.php")
         .then(response => response.json())
         .then(data => this.setState({ markers: data.marker }));
   }

   // Called when user zooms
   handleZoomed = e => {
      this.setState({ onlyUserMarkers: e.target._zoom < 9 ? true : false });
   };

   render() {
      const maxBoundsLatLng = [[40.712, -74.227], [40.774, -74.125]];
      const center = [this.state.lat, this.state.lng];

      return (
         // Create the map object
         <Map
            center={center}
            zoom={this.state.zoom}
            animate={true}
            minZoom={5}
            maxZoom={14}
            zoomControl={false}
            onZoomend={this.handleZoomed}
         >
            {/* Render the map tiles */}
            <TileLayer
               MaxBounds={maxBoundsLatLng}
               attribution={'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> bidragsgivare, Imagery &copy; <a href="http://skoterleder.org">Skoterleder.org</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
               url="https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png"
            />
            {/* Render the user markers */}
            <MarkerClusterGroup maxClusterRadius={70}>
               <Markers
                  markers={this.state.markers}
                  onlyUserMarkers={this.state.onlyUserMarkers}
               />
            </MarkerClusterGroup>
            <ZoomControl position="topright" />
         </Map>
      );
   }
}

export default MyMap;
