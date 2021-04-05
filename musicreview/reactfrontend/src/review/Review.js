import React, { Component } from 'react';
import SideRev from './SideRev';
import MenuRev from './MenuRev';
import './Review.css';


class Review extends Component {
    render() {
        console.log("Album ID clicked and rendering in Review " + localStorage.getItem('albumID'))
        return (
            <div className="Review">
                <div className="ReviewSide">
                    <SideRev />
                </div>
                <div className="ReviewMain">
                    <MenuRev musicID={localStorage.getItem('albumID')} />
                </div>
            </div>
        )
    }
}

export default Review;