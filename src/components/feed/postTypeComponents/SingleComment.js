import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



class SingleComment extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="row commentSection">

                <div className="col-12">
                    <p ><Link to={`/people/${this.props.comment.authorId}`}><strong>{this.props.comment.authorName}</strong></Link> {this.props.comment.body}</p>
                    <div className="col-12">
                        <p><strong>Last post at: </strong>{new Date(this.props.comment.dateCreated).toLocaleTimeString()}</p>
                    </div>
                </div>

            </div>

        );
    };
}
SingleComment.propTypes = {
    comment: PropTypes.object,

};
export default SingleComment;