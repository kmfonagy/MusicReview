import React, { Component } from 'react';
import SideRev from './SideRev';
import MenuRev from './MenuRev';
import './Review.css';

class Review extends Component {
    render() {
        return (
            <div className="Review">
                <div className="ReviewSide">
                    <SideRev />
                </div>
                <div className="ReviewMain">
                    <MenuRev />
                </div>
            </div>
        )
    }
}

export default Review;