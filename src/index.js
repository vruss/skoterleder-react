import React from "react";
import ReactDOM from "react-dom";

import "./menu/sidebar.css";
import SideBar from "./menu/sidebar";
import Information from "./information/information";
import Popup from "./popup";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="App">
				<SideBar />

				<div id="page-wrap">
					{/* <Popup item={<Information />} show={true} /> */}
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
