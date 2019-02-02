import React from "react";
import { slide as Menu } from "react-burger-menu";
import Popup from "../popup";
import Information from "../information/information";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	handleClick(i) {
		console.log("CLICK!");
		this.setState({show: i})

		// return(<Popup item={<Information />} show={true} />);
			/* <Popup show={true} />; */
		
	}

	render() {
	const show = this.state.show;
	let popup;

	if(this.state.show) {
		popup = <Popup item={<Information />} show={true} />;
	}
	else {
		popup = null;
	}

		return (
			<Menu>
				<a
					onClick={() => this.handleClick(true)}
					className="menu-item"
					href="#"
				>
					Home
				</a>

				<a className="menu-item" href="#">
					Burgers
				</a>

				<a className="menu-item" href="#">
					Pizzas
				</a>

				<a className="menu-item" href="#">
					Desserts
				</a>

				 {popup}
			</Menu>
		);
	}
}

export default Sidebar;
