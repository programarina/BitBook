import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import { IMAGE_PLACEHOLDER } from "../../constants";
import DataService from "../../services/dataService";
import EditProfile from "./editProfile";
import Profile from "../../entities/profileDTO";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.imagePlaceholder = IMAGE_PLACEHOLDER;

        this.state = {
            name: "",
            avatarUrl: this.imagePlaceholder,
            commentsCount: "",
            postsCount: "",
            about: "",
            aboutShort: "",
            userId: "",
            profile: null
        };

        this.dataService = new DataService();

        this.afterUpdate = this.afterUpdate.bind(this);
    }

    componentDidMount() {

        this.dataService.getProfile((profile) => {
            this.setState({profile:profile});

        }, error => { console.log(error); });

    }

    afterUpdate() {
        this.componentDidMount();
    }

    render() {
        if (!this.state.profile) {
            return <h1>loading</h1>;
        }

        return (
            <div className="container">
                <div className="row profilePage">
                    <div className='col-sm-12 col-lg-5'>
                        <img src={this.state.profile.avatarUrl} width="100%" id="slika" />
                        <p><strong>Comments count: </strong>{this.state.profile.commentsCount}</p>
                        <p><strong>Posts count:</strong> {this.state.profile.postsCount}</p>
                    </div>
                    <div className='col-sm-12 col-lg-7'>
                        <div className="row">
                            <div className='col-12'>
                                <h3>{this.state.profile.name}</h3>
                                <p className='shortAbout'>{this.state.profile.aboutShort}</p>
                                <p>{this.state.profile.about}</p>
                            </div>
                            <div className='col-1 offset-11'>
                                <EditProfile profileObject={this.state.profile} profileUpdated={this.afterUpdate} />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default ProfilePage; 