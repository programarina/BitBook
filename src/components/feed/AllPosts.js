import React from "react";
import PropTypes from "prop-types";

import PostOnFeedPage from "./postTypeComponents/PostOnFeedPage";
import FilterList from "./FilterList";

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType: "all",

        };
        this.filterSelected = this.filterSelected.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }



    getComponentByType(post, filterType) {
        if (post.type === "text" && (filterType == "text" || filterType == "all")) {
            return <PostOnFeedPage post={post} type={filterType} key={post.id} refreshPage={this.refreshPage} />;
        }
        if (post.type === "video" && (filterType == "video" || filterType == "all")) {
            return <PostOnFeedPage post={post} key={post.id} type={filterType} refreshPage={this.refreshPage} />;
        }
        if (post.type === "image" && (filterType == "image" || filterType == "all")) {
            return <PostOnFeedPage post={post} key={post.id} type={filterType} refreshPage={this.refreshPage} />;
        }

        return "";
    }

    filterSelected(type) {
        this.setState({
            filterType: type
        });
    }
    refreshPage() {
        this.props.refreshPage();
    }
    render() {
        return (
            <div>
                <FilterList onFilterSelected={this.filterSelected} />
                {this.props.posts.map(post => this.getComponentByType(post, this.state.filterType))}
            </div>
        );
    }
}
AllPosts.propTypes = {
    posts: PropTypes.array,
    refreshPage: PropTypes.func

};

export default AllPosts;