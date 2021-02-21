import React, { Component } from "react";
import SideMenu from "./SideMenu";
import MyReviewsAlbums from "./MyReviewsAlbums";
import "./MyReviews.css";

class MyReviews extends Component {
    render() {
        return (
            <div className="myReviews">
                <div className="sideMenu">
                    <SideMenu />
                </div>
                <div className="myReviewsMain">
                    <h1>My Reviews</h1>
                    <MyReviewsAlbums />
                </div>
            </div>
        )
    }
}

export default MyReviews;