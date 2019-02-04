import React from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
// import { fetch } from "whatwg-fetch";
import JsonMarkers from "../data/markers.json";
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
			markers: []
		};
	}

	// Load markers into state
	componentDidMount() {
		this.setState({ markers: JsonMarkers.marker });

		// fetch(URL)
		// 	.then(response => response.json())
		// 	.then(data => this.setState({ markers: data.marker }));
	}

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
			>
				{/* Render the map tiles */}
				<TileLayer
					MaxBounds={maxBoundsLatLng}
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png"
				/>
				{/* Render the markers */}
				<MarkerClusterGroup>
					<Markers markers={this.state.markers} />
				</MarkerClusterGroup>
				<ZoomControl position="topright" />
			</Map>
		);
	}
}

export default MyMap;
