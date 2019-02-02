import React from "react";
import { slide as Menu } from "react-burger-menu";
import Popup from "../popup";

export default function (props) {

	// handleClick(page) {
	// 	alert(page);
	// }

  return (
    <Menu>
      {/* <a onClick={this.handleClick("information")} className="menu-item" >
        Home
      </a> */}

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
