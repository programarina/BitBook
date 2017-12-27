import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import ProfilePage from "../profile/profilePage";
import People from "../peoplePage/people";
import UserProfile from "../peoplePage/userProfile";
import FeedPage from "../feed/FeedPage";
import SinglePostPage from "../feed/SinglePostPage";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/people" component={People} />
                    <Route path="/people/:id" component={UserProfile} />
                    <Route exact path="/feed" component={FeedPage} />
                    <Route path="/feed/:type/:id" component={SinglePostPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default MainPage;