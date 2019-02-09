import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default class MyMarker extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoaded: false,
         title: null,
         description: null,
         name: null,
         createtime: null,
         md5: null,
         hash: null,
      };
   }

   // Called when user clicks on marker
   handleClick = e => {
      fetch(
         "https://test.skoterleder.org/inc/getmarker.php?id=" +
            e.target.options.id
      )
         .then(response => response.json())
         .then(data => {
            console.log(data);
            this.setState({
               title: data.title,
               description: data.description,
               name: data.name,
               createtime: data.createtime,
               md5: data.md5,
               hash: data.hash,
               isLoaded: true,
            });
         });
   };

   // Called when a popup is closed
   handlePopupClose = e => {
      this.setState({ isLoaded: false });
   };

   // Returns either all the markers or just user made ones
   getMarker(marker) {
      return (
         <Marker
            onPopupclose={this.handlePopupClose}
            key={marker.properties.id}
            id={marker.properties.id}
            position={marker.coordinates}
            icon={this.getIcon(marker)}
            onMouseup={this.handleClick}
         >
            {this.state.isLoaded ? (
               this.getPopup(marker)
            ) : (
               <Popup>
                  loading...
                  <img
                     src={require("../images/ajax-loader.gif")}
                     alt="Loading"
                  />
               </Popup>
            )}
         </Marker>
      );
   }

   getName() {
      if (this.state.name === "Import") {
         return "Importerad från OSM";
      } else {
         return "Skapad av: " + this.state.name;
      }
   }

   // Returns a popup
   getPopup(marker) {
      return (
         <Popup>
            <h3>{marker.properties.title}</h3>
            <p>{this.state.description}</p>
            <hr />
            <small>
               {this.getName()}
               <br />
               Date: {this.state.createtime}
            </small>
         </Popup>
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
            popupAnchor: [0, -6],
         }));
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

   // Iterate through each marker in the array
   render() {
      // eslint-disable-next-line
      return this.props.markers.map(marker => {
         // Return user made markers
         if (this.props.onlyUserMarkers && this.isUserIcon(marker)) {
            return this.getMarker(marker);
         }
         // returns all markers
         else if (!this.props.onlyUserMarkers) {
            return this.getMarker(marker);
         }
      });
   }
}
