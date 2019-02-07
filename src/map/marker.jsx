import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default class MyMarker extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: null,
         description: null,
         name: null,
         createtime: null,
         md5: null,
         hash: null,
      };
   }

   // Called when user zooms
   handleClick = e => {
      // console.log(e);

      fetch(
         "https://test.skoterleder.org/inc/getmarker.php?id=" +
            e.target.options.id
      ) // user created marker
         .then(response => response.json())
         .then(data => {
            this.setState({ title: data.title });
            this.setState({ description: data.description });
            this.setState({ name: data.name });
            this.setState({ createtime: data.createtime });
            this.setState({ md5: data.md5 });
            this.setState({ hash: data.hash });
         });
   };

   // Returns either all the markers or just user made ones
   getMarker(marker, props) {
      // Return user made ones
      if (props.onlyUserMarkers) {
         if (this.isUserIcon(marker)) {
            return (
               <Marker
                  key={marker.properties.id}
                  id={marker.properties.id}
                  position={marker.coordinates}
                  icon={this.getIcon(marker)}
                  onMouseup={this.handleClick}
               > 
                  <Popup>
                     <h3>{marker.properties.title}</h3>
                     <p>{this.state.description}</p>
                     <hr></hr>
                     <span>Created by: {this.state.name}<br></br>
                     Date: {this.state.createtime}</span>
                  </Popup>
               </Marker>
            );
         }
      }
      // Return all markers
      else {
         return (
            <Marker
               key={marker.properties.id}
               position={marker.coordinates}
               icon={this.getIcon(marker)}
               id={marker.properties.id}
               onMouseup={this.handleClick}
            >
               <Popup>
               <h3>{marker.properties.title}</h3>
                     <p>{this.state.description}</p>
                     <hr></hr>
                     <span>Imported from Open Street Map<br></br>
                     Date: {this.state.createtime}</span>
               </Popup>
            </Marker>
         );
      }
   }

   // Returns true if the icon is user made
   isUserIcon(marker) {
      return !(
         marker.icon === "fuel" ||
         marker.icon === "shelter" ||
         marker.icon === "wildernesshut"
      );
   }

   // Returns a marker with different anchor points depending on the marker type
   getIcon(marker) {
      // eslint-disable-next-line
      let icon;
      if (this.isUserIcon(marker)) {
         return (icon = L.icon({
            iconUrl: require(`../images/icons/${marker.icon}.png`),
            iconAnchor: [16, 37],
            iconSize: [32, 37],
            popupAnchor: [0, -33],
         }));
      } else {
         return (icon = L.icon({
            iconUrl: require(`../images/icons/${marker.icon}.png`),
            iconAnchor: [10, 10],
            iconSize: [20, 20],
            popupAnchor: [17, 0],
         }));
      }
   }

   // Iterate through each marker in the array
   render() {
      return this.props.markers.map(marker => {
         return this.getMarker(marker, this.props);
      });
   }
}
