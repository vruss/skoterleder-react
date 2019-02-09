import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import "./information.css";

class Information extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         about: false,
      };
   }

   render() {
      const { about } = this.state;

      return (
         <div className="Information">
            <Jumbotron fluid>
               <h1>Skoterleder.org</h1>
               <p>omskriven i React.js</p>
            </Jumbotron>

            <div className="information-container">
               <Button
                  variant="info"
                  onClick={() => this.setState({ about: !about })}
                  block
               >
                  Om skoterleder.org
               </Button>
               <Collapse in={this.state.about}>
                  <div id="about-collapse-text">
                     <p>
                        Den här versionen av Skoterleder.org är under
                        omskrivning just nu i React.js och är en fri och öppen
                        karta där alla kan vara med och bidra med skoterleder.
                     </p>
                     <p>
                        Kartan är främst till för dem som åker skoter men kartan
                        kan även användas på skoterklubbens, kommunens eller din
                        egen hemsida för att visa skoterleder i ditt område.
                     </p>
                     <p>
                        Kartan hämtar data från{" "}
                        <a href="https://skoterleder.org">skoterleder.org</a>{" "}
                        som i sin tur hämtar data från{" "}
                        <a href="http://www.openstreetmap.org/">
                           OpenStreetMap
                        </a>{" "}
                        och vi behöver din hjälp för att göra den komplett!
                        Skoterleder.org omskriven i React.js består av öppen
                        källkod och finns i sin helhet på github under:{" "}
                        <a href="https://github.com/vruss/skoterleder-react">
                           skoterleder-react
                        </a>{" "}
                        och den ursprungliga källkoden finns på github under:{" "}
                        <a href="https://github.com/skoterleder/skoterleder.org">
                           skoterleder.org
                        </a>
                     </p>
                     <b>All hjälp med sidan är välkommen!</b>
                  </div>
               </Collapse>
            </div>
         </div>
      );
   }
}

export default Information;
