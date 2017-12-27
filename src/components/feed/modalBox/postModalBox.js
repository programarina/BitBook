import React from "react";
import PropTypes from "prop-types";


class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleSaveClicked = this.handleSaveClicked.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleClick() {
        this.props.closeModal();
    }

    handleSaveClicked() {
        let text = this.state.text;
        this.props.handleTextBlog(text);
    }

    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleClick}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h4 className="modal-title">Add post</h4>
                </div>
                <div className="modal-body modalBox">
                    <h3>New post</h3>
                    <textarea name="postBody" value={this.state.postBody} placeholder="Write..." onChange={this.handleChange}></textarea>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>Close</button>
                    <button type="button" className="btn btn-primary modalBtn" onClick={this.handleSaveClicked}>Save changes</button>
                </div>
            </div>

        );
    }
}
AddPost.propTypes = {
    closeModal: PropTypes.func,
    handleTextBlog: PropTypes.func

};
export default AddPost;