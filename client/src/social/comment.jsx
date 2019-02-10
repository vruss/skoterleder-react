import React from "react";
import UserInfo from "./user-info";

function formatDate(date) {
	return date.toLocaleDateString();
}

class Comment extends React.Component {
   constructor(props) {
		super(props);
		this.state = {};
	}

   render() { 
      return (
         <div className="Comment">
            <UserInfo user={this.props.author} />
            <div className="Comment-text">{this.props.text}</div>
            <div className="Comment-date">{formatDate(this.props.date)}</div>
         </div>
      );
   }
}
 
export default Comment;