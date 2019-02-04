import React from "react";
import { Map, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
// import { fetch } from "whatwg-fetch";
import Markers from "../data/markers.json";
// import Icons from "../images/icons";
import MyMarker from "./marker";
import MarkerClusterGroup from "react-leaflet-markercluster/dist/react-leaflet-markercluster";

import "./map.css";

class MyMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 62.31,
			lng: 15.39,
			zoom: 13,
			markers: []
		};
	}

	// Load markers into state
	componentDidMount() {
		this.setState({ markers: Markers.marker });
		// console.log(Icons);

		// fetch(URL)
		// 	.then(response => response.json())
		// 	.then(data => this.setState({ markers: data.marker }));
	}

	render() {
		const latLngList = [[40.712, -74.227], [40.774, -74.125]];
		const position = [this.state.lat, this.state.lng];

		return (
			<Map
				center={position}
				zoom={this.state.zoom}
				animate={true}
				minZoom={5}
				maxZoom={7}
				zoomControl={false}
			>
				<TileLayer
					MaxBounds={latLngList}
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png"
				/>

				<MarkerClusterGroup>
					<MyMarker markers={this.state.markers} />
				</MarkerClusterGroup>

				{/* <Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}

				<ZoomControl position="topright" />
			</Map>
		);
	}
}

export default MyMap;
