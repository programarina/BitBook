import React from "react";
import LogOutButton from "../common/logOutButton";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <Link className="navbar-brand" to="/feed">Bitbook</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">Profile<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/people">People<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/feed">Feed<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>

                    <LogOutButton />
                </div>
            </div>
        </div>




    );
};

export default Header;