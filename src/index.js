import React from "react";
import ReactDOM from "react-dom";

import Information from "./information/information";
import Comment from "./social/comment";

const newComment = {
	date: new Date(),
	text: "I hope you enjoy learning React!",
	author: {
		name: "Hello Kitty",
		avatarUrl: "https://placekitten.com/g/64/64",
	},
};

ReactDOM.render(
	<Comment
		date={newComment.date}
		text={newComment.text}
		author={newComment.author}
	/>,
	document.getElementById("root"),
);
