import React from "react";
import { Map, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";

class MyMap extends React.Component {
	constructor() {
		super();
		this.state = {
			lat: 62.31,
			lng: 15.39,
			zoom: 7,
		};
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
				maxZoom={14}
            zoomControl={false }
			>
				<TileLayer
					MaxBounds={latLngList}
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ZoomControl position="topright" />
			</Map>
		);
	}
}

export default MyMap;
