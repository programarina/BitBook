import React, { Component } from "react";
import PropTypes from "prop-types";

class FilterList extends Component {

    constructor(props) {
        super(props);

    }
    handleClickImage() {
    }

    render() {
        return (
            <div className="col-1 offset-10">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter posts</button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => this.props.onFilterSelected("image")}>Images</button>
                        <button className="dropdown-item" onClick={() => this.props.onFilterSelected("text")}>Posts</button>
                        <button className="dropdown-item" onClick={() => this.props.onFilterSelected("video")}>Videos</button>
                        <button className="dropdown-item" onClick={() => this.props.onFilterSelected("all")}>All</button>
                    </div>
                </div>
            </div>
        );
    }
}
FilterList.propTypes = {
    onFilterSelected: PropTypes.func,

};
export default FilterList;