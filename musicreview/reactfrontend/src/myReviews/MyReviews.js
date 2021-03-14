import React, { Component } from "react";
import SideMyRev from "./SideMyRev";
import MyReviewsAlbums from "./MyReviewsAlbums";
import "./MyReviews.css";

class MyReviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserID: this.props.UserID
        }

        this.id = 1;
    }
    render() {
        return (
            <div className="MyReviews">
                <div className="MyReviewsSide">
                    <SideMyRev UserID={this.id} />
                </div>
                <div className="MyReviewsMain">
                    <MyReviewsAlbums UserID={this.id} />
                </div>
            </div>
        )
    }
}

export default MyReviews;
