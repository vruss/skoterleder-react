import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function MyMarker(props) {
	let icon;

	// Iterate through each marker in the array
	return props.markers.map(
		marker => (
			// Create the marker icon
			(icon = L.icon({
				iconUrl: require(`../images/icons/${marker.icon}.png`),
				popupAnchor: [0, -33]
				// eslint-disable-next-line
			})),
			(
				// Render the marker
				<Marker
					key={marker.properties.id}
					position={marker.coordinates}
					icon={icon}
				/>
			)
		)
	);
}
