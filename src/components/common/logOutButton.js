import React from "react";
import AuthenticationService from "../../services/authenticationService";

class LogOutButton extends React.Component {
    constructor(props) {
        super(props);
        this.authenticationService = new AuthenticationService();
        this.handleClickLogOut = this.handleClickLogOut.bind(this);
    }

    handleClickLogOut() {
        this.authenticationService.logOut();
    }

    render() {
        return (<button className="btn btn-secondary btn"
            type="button" name="action" id="logout" onClick={this.handleClickLogOut}>
            LogOut</button>);
    }
}

export default LogOutButton;





