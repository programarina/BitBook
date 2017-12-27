import React from "react";
import PropTypes from "prop-types";

import SingleComment from "./postTypeComponents/SingleComment";

class ListOfComments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.allComments.map(comment => <SingleComment comment={comment} key={comment.id} />)}
            </div>
        );
    }
}
ListOfComments.propTypes = {
    postId: PropTypes.number,
    allComments: PropTypes.array


};
export default ListOfComments; 