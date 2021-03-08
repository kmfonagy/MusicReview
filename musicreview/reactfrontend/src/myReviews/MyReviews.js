import React, { Component } from "react";
import SideMenu from "./SideMenu";
import MyReviewsAlbums from "./MyReviewsAlbums";
import "./MyReviews.css";

class MyReviews extends Component {
    render() {
        return (
            <div className="MyReviews">
                <div className="MyReviewsSide">
                    <SideMenu />
                </div>
                <div className="MyReviewsMain">
                    <MyReviewsAlbums />
                </div>
            </div>
        )
    }
}

export default MyReviews;