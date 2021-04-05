import React, { Component } from "react";
import SideMyRev from "./SideMyRev";
import MyReviewsAlbums from "./MyReviewsAlbums";
import "./MyReviews.css";

class MyReviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserID: localStorage.getItem("userID")
        }
    }
    render() {
        return (
            <div className="MyReviews">
                <div className="MyReviewsSide">
                    <SideMyRev UserID={this.state.UserID} />
                </div>
                <div className="MyReviewsMain">
                    <MyReviewsAlbums UserID={this.state.UserID} />
                </div>
            </div>
        )
    }
}

export default MyReviews;
