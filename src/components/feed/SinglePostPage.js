import React from "react";
import PostDataService from "../../services/postDataService";
import PropTypes from "prop-types";
import CommentsForm from "./CommentsForm";
import ListOfComments from "./ListOfComments";

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            allComments: []
        };


        this.postId = parseInt(this.props.match.params.id);
        this.postType = this.props.match.params.type;

        this.postDataService = new PostDataService();
        this.createComment = this.createComment.bind(this);
        this.getComponent = this.getComponent.bind(this);
    }

    componentDidMount() {
        this.fetchPostData(this.postId, this.postType);
        this.getListOfComments();
    }


    getListOfComments() {
        this.postDataService.getAllComments(this.postId, listOfComments => {
            this.setState({ allComments: listOfComments });
        }, error => {
            console.log(error);
        });
    }

    fetchPostData(postId, postType) {
        this.postDataService.getSinglePost(postId, postType, post => {
            this.setState({ post });
        }, error => {
            console.log("ERR ", error);
        });
    }

    createComment(body) {
        let commentObj = {
            body: body,
            postId: this.postId
        };
        this.postDataService.postComment(commentObj, response => {
            this.getListOfComments();
        }, error => {
            console.log(error);
        });
    }

    getComponent(type) {
        if (type === "text") {
            return <p>{this.state.post.text}</p>;
        }
        if (type === "image") {
            console.log(this.state.post.imageUrl);
            return <img width="100%" height="400" src={this.state.post.imageUrl} />;
        }
        if (type === "video") {
            return <iframe width="900" height="400" src={this.state.post.videoUrl} frameBorder="0" allowFullScreen></iframe>;
        }


    }

    render() {
        return (
            <div className="container sngPstPg">
                <div className="row videoPost">
                    <div className="col-12">
                        {this.getComponent(this.state.post.type)}
                    </div>
                    <p className="col-12"><strong>Author:</strong> {this.state.post.userDisplayName}</p>
                    <ListOfComments allComments={this.state.allComments} />
                </div>
                <CommentsForm saveComment={this.createComment} />
            </div>
        );
    };
}

SinglePostPage.propTypes = {
    match: PropTypes.object

};
export default SinglePostPage;