import React from "react";

import PropTypes from "prop-types";


class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        this.props.handleOpen(type);
    }
    render() {
        return (

            <div className="col-2 offset-10 addBtn">
                <div className="btn-group">
                    <button type="button" className="addBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="./../../../img/addBtn.png" width="70px" /></button>

                    <div className="dropdown-menu">
                        <button name="image" className="dropdown-item" onClick={() => this.handleClick("image")}>Image</button>
                        <button name="post" className="dropdown-item" onClick={() => this.handleClick("post")}>Post</button>
                        <button name="video" className="dropdown-item" onClick={() => this.handleClick("video")}>Video</button>

                    </div>
                </div>
            </div >);
    }
}

AddBtn.propTypes = {
    handleOpen: PropTypes.func

};
export default AddBtn;