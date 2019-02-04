// iconType[0] = L.icon({
// 	iconUrl: "images/icons/question.png",
// 	iconSize: [32, 37], // size of the icon
// 	iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[1] = L.icon({
// 	iconUrl: "images/icons/snowmobile-green.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[2] = L.icon({
// 	iconUrl: "images/icons/information.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[3] = L.icon({
// 	iconUrl: "images/icons/treedown.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[4] = L.icon({
// 	iconUrl: "images/icons/caution.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[5] = L.icon({
// 	iconUrl: "images/icons/fixmap.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[6] = L.icon({
// 	iconUrl: "images/icons/parking.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });
// iconType[7] = L.icon({
// 	iconUrl: "images/icons/coffee.png",
// 	popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
// });

// iconType[500] = L.icon({
// 	iconUrl: "images/icons/fuel.png",
// 	iconSize: [20, 20], // size of the icon
// 	iconAnchor: [10, 10] // point of the icon which will correspond to marker's location
// });
// iconType[501] = L.icon({
// 	iconUrl: "images/icons/shelter.png",
// 	iconSize: [20, 20], // size of the icon
// 	iconAnchor: [10, 10] // point of the icon which will correspond to marker's location
// });
// iconType[502] = L.icon({
// 	iconUrl: "images/icons/wildernesshut.png",
// 	iconSize: [20, 20], // size of the icon
// 	iconAnchor: [10, 10] // point of the icon which will correspond to marker's location
// });

// iconType["move"] = L.icon({
// 	iconUrl: "images/icons/move.png",
// 	iconSize: [35, 35], // size of the icon
// 	iconAnchor: [17, 17], // point of the icon which will correspond to marker's location
// 	popupAnchor: [17, 0] // point from which the popup should open relative to the iconAnchor
// });
// iconType["corner"] = L.icon({
// 	iconUrl: "images/icons/corner.png",
// 	iconSize: [14, 14], // size of the icon
// 	iconAnchor: [7, 7], // point of the icon which will correspond to marker's location
// 	popupAnchor: [7, 0] // point from which the popup should open relative to the iconAnchor
// });
// iconType["l"] = newL.icon({
// 	iconUrl: "images/icons/map22-1.png",
// 	iconSize: [22, 33], // size of the icon
// 	iconAnchor: [11, 33], // point of the icon which will correspond to marker's location
// 	popupAnchor: [11, -33] // point from which the popup should open relative to the iconAnchor
// });

import L from "leaflet";

export const SnowmobileGreenIcon = new L.Icon({
	// iconUrl: require('../assets/pointerIcon.svg'),
	// iconRetinaUrl: require('../assets/pointerIcon.svg'),
	// iconAnchor: [5, 55],
	// popupAnchor: [10, -44],
	// iconSize: [25, 55],
	// shadowUrl: '../assets/marker-shadow.png',
	// shadowSize: [68, 95],
	// shadowAnchor: [20, 92],

	iconUrl: require("../images/icons/snowmobile-green.png"),
	// iconRetinaUrl: require("images/icons/snowmobile-green.png"),
	popupAnchor: [0, -33]
});
