import React from "react";
import PropTypes from "prop-types";

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({ body: event.target.value });
    }
    handleClick() {
        this.props.saveComment(this.state.body);
        this.setState({body:""});
    }


    render() {
        return (
            <div className="container">
                <div className="row videoPost">
                    <input type="text" value={this.state.body} onChange={this.handleChange} />
                    <button className="commentBtn" onClick={this.handleClick}>Comment</button>
                </div>
            </div>

        );
    };
}

CommentsForm.propTypes = {
    postId: PropTypes.number,
    type: PropTypes.string,
    saveComment: PropTypes.func
};
export default CommentsForm;