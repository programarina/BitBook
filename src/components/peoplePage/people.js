import React from "react";
import DataService from "../../services/dataService";
import User from "./user";
import Search from "./../common/searchInput";
import PropTypes from "prop-types";

class People extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            filteredUsers: [],
            userId: "",
            errorMsgServer: ""
        };
        this.dataService = new DataService();
        this.searchUserByName = this.searchUserByName.bind(this);
        this.filterLoggedInUser = this.filterLoggedInUser.bind(this);
        this.getUserList = this.getUserList.bind(this);
    }

    componentDidMount() {
        this.getUserList();
        this.filterLoggedInUser();

    }

    getUserList() {
        this.dataService.getUsers((users) => {
            this.setState({
                allUsers: users,
                filteredUsers: users
            });
        }, error => {
            this.setState({ errorMsgServer: error });
        });
    }

    filterLoggedInUser() {
        this.dataService.getProfile((profile) => {
            this.setState({ userId: profile.userId });
        }, (error) => {
            this.setState({ errorMsgServer: error });
        });
    }

    searchUserByName(nameOfUser) {
        let currentUsers = this.state.allUsers;

        if (nameOfUser === "") {
            this.setState({ filteredUsers: this.state.allUsers });
            return;
        } else {
            const filteredList = currentUsers.filter(element => {
                return element.name.includes(nameOfUser);
            });
            this.setState({ filteredUsers: filteredList });

        }
    }
    render() {
        let userList = this.state.filteredUsers;
        if (!userList) {
            return (
                <div className="center-align">
                    <h4>Loading users...</h4>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <Search useSearchString={this.searchUserByName} />
                    {userList.filter(element => element.id !== this.state.userId).map((element) => <User user={element} key={element.id} />)}
                    <div>{this.state.errorMsgServer}</div>
                </div>
            </div>

        );
    }
}
People.propTypes = {
    userId: PropTypes.number,
};

export default People;