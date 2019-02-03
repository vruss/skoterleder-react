import React from "react";
import ReactDOM from "react-dom";

import "./menu/sidebar.css";
import SideBar from "./menu/sidebar";
import Information from "./information/information";
import Popup from "./popup";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			element: <Information />,
			show: false,
			menuOpen: false,
		};
	}

	

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div id="App">
				<SideBar
					handleClose={this.handleClose}
					handleShow={this.handleShow}
				/>
				<Popup
					element={this.state.element}
					show={this.state.show}
					handleClose={this.handleClose}
				/>

				<div id="page-wrap" />
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
