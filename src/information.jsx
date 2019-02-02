import React from "react";

export default class Information extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( <h2>Hej {this.props.name} </h2> );
	}
}
 
