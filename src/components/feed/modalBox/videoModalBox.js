import React from "react";
import PropTypes from "prop-types";
import {YOUTUBE_VIDEO_URL} from "../../../constants";


class AddVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoUrl: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);
    }

    handleClick() {
        this.props.closeModal();

    }

    handleChange(event) {
        this.setState({
            videoUrl: event.target.value
        });
    }

    handleSaveClicked() {
        const videoUrl = this.state.videoUrl;
        const splitedVideoUrl = videoUrl.split("=");
        this.props.showVideoPost(`${YOUTUBE_VIDEO_URL}${splitedVideoUrl[1]}`);
        console.log(`${YOUTUBE_VIDEO_URL}${splitedVideoUrl[1]}`);
    }

    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleClick}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h4 className="modal-title">Add video</h4>
                </div>
                <div className="modal-body modalBox">
                    <h3>New video</h3>
                    <textarea name="videoUrl" placeholder="You tube video" value={this.state.videoUrl} onChange={this.handleChange}></textarea>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>Close</button>
                    <button type="button" className="btn btn-primary modalBtn" onClick={this.handleSaveClicked}>Save changes</button>
                </div>
            </div>

        );
    }
}
AddVideo.propTypes = {
    closeModal: PropTypes.func,
    showVideoPost: PropTypes.func

};
export default AddVideo;