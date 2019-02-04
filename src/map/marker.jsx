// https://react-leaflet.js.org/docs/en/examples.html

import React from "react";
import { Marker, Popup, Icon } from "react-leaflet";
import { SnowmobileGreenIcon } from "./icons";

// import SnowmobileGreen from "../images/icons/snowmobile-green.png";
// import Information from "../images/icons/information.png";
// import TreeDown from "../images/icons/treedown.png";
// import Caution from "../images/icons/caution.png";
// import FixMap from "../images/icons/fixmap.png";
// import Parking from "../images/icons/parking.png";
// import Coffee from "../images/icons/coffee.png";

// import Fuel from "../images/icons/fuel.png";
// import Shelter from "../images/icons/shelter.png";
// import WildernesShut from "../images/icons/wildernesshut.png";

class MyMarker extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return this.props.markers.map(
			marker => (
				console.log("new marker"),
				(
					<Marker
						key={marker.properties.id}
						position={marker.coordinates}
						// icon={marker => getMarker(marker)}
						icon={SnowmobileGreenIcon}
					/>
				)
			)
		);
	}
}

function getMarker(marker) {
	console.log("new marker");

	if (marker.icon === "SnowmobileGreenIcon") {
		return SnowmobileGreenIcon;
	}
}

export default MyMarker;
