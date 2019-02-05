import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function MyMarker(props) {
   // Iterate through each marker in the array
   return props.markers.map(marker => {
      return getMarker(marker, props);

      // Returns markers if they are user made
      // return (props.onlyUserMarkers && isUserIcon(marker)) ? (
      //    <Marker
      //       key={marker.properties.id}
      //       position={marker.coordinates}
      //       icon={getIcon(marker)}
      //    />
      // ) : // Else return null
      // <Marker
      //       key={marker.properties.id}
      //       position={marker.coordinates}
      //       icon={getIcon(marker)}
      //    />;
   });
}

// Returns either all the markers or just user made ones
function getMarker(marker, props) {
   // Return user made ones
   if (props.onlyUserMarkers) {
      if (isUserIcon(marker)) {
         return (
            <Marker
               key={marker.properties.id}
               position={marker.coordinates}
               icon={getIcon(marker)}
            />
         );
      }
   }
   // Return all markers
   else {
      return (
         <Marker
            key={marker.properties.id}
            position={marker.coordinates}
            icon={getIcon(marker)}
         />
      );
   }

   // return (
   //    <Marker
   //       key={marker.properties.id}
   //       position={marker.coordinates}
   //       icon={getIcon(marker)}
   //    />
   // );
}

// Returns true if the icon is user made
function isUserIcon(marker) {
   return !(
      marker.icon === "fuel" ||
      marker.icon === "shelter" ||
      marker.icon === "wildernesshut"
   );
}

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
         popupAnchor: [17, 0],
      }));
   } else {
      return (icon = L.icon({
         iconUrl: require(`../images/icons/${marker.icon}.png`),
         iconAnchor: [16, 37],
         iconSize: [32, 37],
         popupAnchor: [0, -33],
      }));
   }
}
