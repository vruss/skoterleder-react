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
						<p>Kartan för skoteråkare, av skoteråkare!</p>
					</Jumbotron>
				

				<Button
					variant="info"
					onClick={() => this.setState({ about: !about })}
					block
					/* aria-controls="about-collapse-text"
					aria-expanded={about} */
				>
					Om oss
				</Button>
				<Collapse in={this.state.about}>
					<div id="about-collapse-text">
						<p>
							Skoterleder.org är en öppen och fri karta där alla kan
							bidra med skoterleder.
						</p>
						<p>
							En karta som förts och främst är till för de som åker
							skoter! Kartan kan även användas på bl.a. Skoterklubbens,
							Kommunens eller varför inte Din hemsida för att visa
							skoterleder i ditt område.
						</p>
						<p>
							Kartan hämtar data ifrån OpenStreetMap och vi behöver din
							hjälp med att göra den komplett!
						</p>
						<p>
							Skoterleder.org består av öppen källkod och finns i sin
							helhet på github:
							https://github.com/skoterleder/skoterleder.org
						</p>
						<b>All hjälp med sidan är välkommen!</b>
					</div>
				</Collapse>
			</div>
		);
	}
}

export default Information;
