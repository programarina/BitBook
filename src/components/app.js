import React from "react";
import LoginPage from "./login/loginPage";
import LoginForm from "./login/loginForm";
import RegisterForm from "./login/registerForm";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./common/mainPage";
import AuthenticationService from "./../services/authenticationService";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.authenticationService = new AuthenticationService();
    }


    render() {
        
        if (!this.authenticationService.isUserAuthenticated()) {
            return (
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={LoginPage} />
                </Switch>
         
            );
        }

        return <MainPage />;
    }
}


export default App;
