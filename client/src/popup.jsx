import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup(props) {
	return (
		<Modal size="lg" show={props.show} onHide={props.handleClose}>
			{props.element}
			<Modal.Footer>
				<Button variant="secondary" onClick={props.handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Popup;
 