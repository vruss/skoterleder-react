import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Popup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
		};
	}

	render() {
		return (
			<Modal
				size="lg"
				show={this.props.show}
				onHide={this.props.handleClose}
			>
				{this.props.element}
				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default Popup;
