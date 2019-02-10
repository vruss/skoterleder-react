import React from "react";
import ReactDOM from "react-dom";

import "./menu/sidebar.css";
import SideBar from "./menu/sidebar";
import Information from "./information/information";
import Popup from "./popup";
import MyMap from "./map/map";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			element: <Information />,
			show: false
		};
	}

	componentDidMount() {
		fetch('/users')
		  .then(res => res.json())
		  .then(users => console.log(users));
		  
	  }

	handleClose() {
		this.setState({ show: false });
	}

	handleShow(element) {
		this.setState({ show: true });
		this.setState({ element: element });
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

				<div id="page-wrap">
					<MyMap />
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
