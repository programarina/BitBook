import React from "react";

import AuthenticationService from "../../services/authenticationService";
import HandleErrorService from "../../services/handleError";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            email: "",
            repeatPassword: "",
            emptyInput: "",
            passLength: "",
            invalidEmail: "",
            passNotMatch: "",
            errorMsgServer: ""
        };
        this.handleErrorService = new HandleErrorService();
        this.authenticationService = new AuthenticationService();
        this.bindFunction();
    }

    bindFunction() {
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }
    onRegisterClick() {
        const data = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            repeatPassword: this.state.repeatPassword
        };

        
        const emptyInput = this.handleErrorService.validateEmptyField(data);
        const passLength = this.handleErrorService.validateInputLength(data.password, 1);
        const invalidEmail = this.handleErrorService.validateEmail(data.email);
        const invalidUsername = this.handleErrorService.validateEmail(data.username);
        const passNotMatch = this.handleErrorService.validateInputMatch(data.password, data.repeatPassword);

        this.setState({
            emptyInput: emptyInput,
            passLength: passLength,
            invalidEmail: invalidEmail,
            passNotMatch: passNotMatch
        });


        if (emptyInput || passLength || invalidEmail || invalidUsername || passNotMatch) {
            return;
        } else {
            this.authenticationService.register(data, (error) => {
                this.setState({ errorMsgServer: error });
            });
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Username*</label><br />
                            <input id="input_text" type="text" data-length="25" name="username" placeholder="username@username.com"
                                value={this.state.username} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Password*</label><br />
                            <input id="input_text" type="password" data-length="25" name="password" placeholder="password123"
                                value={this.state.password} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Name*</label><br />
                            <input id="input_text" type="text" data-length="25" name="name" placeholder="Name"
                                value={this.state.name} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Email*</label><br />
                            <input id="input_text" type="email" data-length="25" name="email" placeholder="username@username.com"
                                value={this.state.email} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Repeat password*</label><br />
                            <input id="input_text" type="password" data-length="25" name="repeatPassword"
                                value={this.state.repeatPassword} onChange={this.handleChange} placeholder="password123"
                            />
                        </div>
                    </div>

                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.onRegisterClick}>
                        Register Now
                    </button>
                    <div>{this.state.emptyInput}</div>
                    <div>{this.state.errorMsgServer}</div>
                    <div>{this.state.invalidEmail}</div>
                    <div>{this.state.passLength}</div>
                    <div>{this.state.passNotMatch}</div>

                </div>
            </div >
        );

    }
}

export default RegisterForm; 