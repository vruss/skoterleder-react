import React from "react";
import ReactDOM from "react-dom";

import "./menu/sidebar.css";
import SideBar from "./menu/sidebar";
import Information from "./information/information";
import Popup from "./popup";

function App() {
	return (
		<div id="App">
			<SideBar />

			<div id="page-wrap">
				<Information />
            <Popup/>
				{/* <h1>Cool Restaurant 🍔🍕</h1>
				<h2>Check out our offerings in the sidebar!</h2> */}
			</div>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
