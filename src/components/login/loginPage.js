import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

const LoginPage = (props) => {
    return (

        <div className='container-fluid logInPage'>
            <div className="container">
                <div className="row" >
                    <div className="col-sm-12 col-lg-6" >
                        <h1>Welcome to BitBook</h1>
                        <p>Lorem ipsum dolor sit amet, ad vis mazim legere virtute. Per ne labore graecis menandri. Vel mutat causae ut, ferri debet omnium vim et. Ea mel delenit consetetur, ne convenire philosophia pri, equidem omittam blandit no est. Id dicta nostro qui. Reque iisque nominavi sed in, eam in nulla consequat, sea philosophia definitionem et</p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6 bigTitle">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="col-sm-6 col-lg-6 bigTitle">
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-12">
                            <Switch>
                                <Route exact path="/" component={LoginForm} />
                                <Route path="/login" component={LoginForm} />
                                <Route path="/register" component={RegisterForm} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginPage; 