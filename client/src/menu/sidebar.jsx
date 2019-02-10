import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import Information from "../information/information";
import Button from "react-bootstrap/Button";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu() {
		this.setState({ menuOpen: false });
	}

	// Closes menu and calls popup function
	handleClick(element) {
		this.closeMenu();
		this.props.handleShow(element);
	}

	render() {
		return (
			<Menu
				noOverlay
				disableOverlayClick // Prevent overlay clicks from closing the menu
				isOpen={this.state.menuOpen}
				onStateChange={state => this.handleStateChange(state)}
			>
				<Button
					variant="outline-*"
					onClick={() => this.handleClick(<Information />)}
					className="menu-item"
					href="#"
				>
					More Information
				</Button>

				<Button
					variant="outline-*"
					onClick={() => this.handleClick(<h1>TEST BUTTON</h1>)}
					className="menu-item"
					href="#"
				>
					Test Button
				</Button>

				<Button variant="outline-*" className="menu-item" href="#">
					Pizzas
				</Button>

				<Button variant="outline-*" className="menu-item" href="#">
					Desserts
				</Button>
			</Menu>
		);
	}
}

export default Sidebar;
