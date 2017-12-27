import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACEHOLDER } from "../../constants";
import Profile from "../../entities/profileDTO";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class UserProfile extends React.Component {

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
            id: "",
            errorMsgServer:"",
            profile: null
        };

        this.dataService = new DataService();
        this.showUserData = this.showUserData.bind(this);
    }

    componentDidMount() {
        let peopleId = this.props.match.params.id;
        this.showUserData(peopleId);
    }

    showUserData(peopleId){
        this.dataService.getUserProfile(peopleId, (response)=>{
            let user = response.data;
            this.setState({
                name: user.name,
                avatarUrl: user.avatarUrl || this.imagePlaceholder,
                commentsCount:  user.commentsCount,
                postsCount:  user.postsCount,
                about:  user.about,
                aboutShort:  user.aboutShort,
                id: user.id
            });
        }, error=>{
            this.setState({errorMsgServer:error});
        });

    }

    render() {
     

        return (
            <div className="container">
                <div className="row profilePage">
                    <div className='col-5'>
                        <img src={this.state.avatarUrl} width="100%" id="slika" />
                        
                        <p><strong> Comments count: </strong>{this.state.commentsCount}</p>
                        <p><strong> Posts count: </strong>{this.state.postsCount}</p>
                    </div>
                    <div className='col-7'>
                        <h3>{this.state.name}</h3>
                        <p className='shortAbout'>{this.state.shortAbout}</p>
                        <p>{this.state.about}</p>
                        <p>{this.state.errorMsgServer}</p>
                    </div>
                </div >
            </div >
        );
    }
}
UserProfile.propTypes = {
    match: PropTypes.object
    
};
export default UserProfile; 