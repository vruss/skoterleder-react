import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Information from "./information/information";

class Popup extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	componentDidMount() {
      this.setState({show: this.props.show})
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Launch demo modal
				</Button>

				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					{this.props.item}
					{/* <Information /> */}
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Popup;
