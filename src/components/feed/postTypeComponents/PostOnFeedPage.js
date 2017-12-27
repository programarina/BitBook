import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import PostDataService from "../../../services/postDataService";
import DataService from "../../../services/dataService";


class PostOnFeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myId: "",
            showModal:false
        };
        this.postObj = this.props.post;
        this.getComponentByType = this.getComponentByType.bind(this);
        this.postDataService = new PostDataService();
        this.deleteButton = this.deleteButton.bind(this);
        this.dataService = new DataService();
        this.showDeleteButton= this.showDeleteButton.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }
    deleteButton() {
        this.postDataService.deleteSinglePost(this.props.post.id, response => {
            this.props.refreshPage();
        }, error => {
            console.log(error);
        });
    }
    
    showDeleteButton() {
        this.dataService.getProfile((profile) => {
            this.setState({ myId: profile.userId });
        }, error => { console.log(error); });

        if (this.props.post.userId === this.state.myId) {
            return <button type="button" className="btn btn-outline-secondary deleteBtn" onClick={this.handleOpenModal}>x</button>;
        }
        return;
    }
    
    
    getComponentByType(type) {
        if (type === "text") {
            return <p>{this.props.post.text}</p>;
        }
        if (type === "image") {
            return <img className="postImage" src={this.props.post.imageUrl} width="100%" />;
        }
        if (type === "video") {
            return <iframe width="100%" height="400px" src={this.props.post.videoUrl} frameBorder="0" ></iframe>;
        }

    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleOpenModal(type) {
        this.setState({
            showModal: true,
        });
    }
    render() {
        return (
            <div className="row videoPost">
                <div className="col-sm-11">
                    {this.getComponentByType(this.props.post.type)}
                </div>
                <div className="col-sm-1">
                    {this.showDeleteButton()}
                </div>
                <div className="col-12">
                    <div className="borderTop row">
                        <p className="col-4 typeOfPost">Author: {this.props.post.userDisplayName}</p>
                        <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
                        <p className="col-4 linkBtn"><Link to={`/feed/${this.postObj.type}/${this.props.post.id}`}><img className="linkImg" src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>
                    </div>
                    <Modal className="Modal__Bootstrap modal-dialog" isOpen={this.state.showModal}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.handleCloseModal}>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                            <div className="modal-body modalBox">
                                <h5>Delete post?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.deleteButton}>Delete</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

PostOnFeedPage.propTypes = {
    post: PropTypes.object,
    refreshPage: PropTypes.func

};
export default PostOnFeedPage;