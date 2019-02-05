import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function MyMarker(props) {
	// Returns a marker with different anchor points depending on the marker type
	function getIcon(marker) {
		// eslint-disable-next-line
		let icon;
		if (
			marker.icon === "fuel" ||
			marker.icon === "shelter" ||
			marker.icon === "wildernesshut"
		) {
			return (icon = L.icon({
				iconUrl: require(`../images/icons/${marker.icon}.png`),
				iconAnchor: [10, 10],
				iconSize: [20, 20],
				popupAnchor: [17, 0]
			}));
		} else {
			return (icon = L.icon({
				iconUrl: require(`../images/icons/${marker.icon}.png`),
				iconAnchor: [16, 37],
				iconSize: [32, 37],
				popupAnchor: [0, -33]
			}));
		}
	}

	// Iterate through each marker in the array
	return props.markers.map(marker => {
		return (
			<Marker
				key={marker.properties.id}
				position={marker.coordinates}
				icon={getIcon(marker)}
			/>
		);
	});
}
