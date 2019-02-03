import React from "react";
import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen = false;
		}
	}

	render() {
		return (
			<Menu>
				<a onClick={this.props.handleShow} className="menu-item" href="#">
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
			</Menu>
		);
	}
}

export default Sidebar;
