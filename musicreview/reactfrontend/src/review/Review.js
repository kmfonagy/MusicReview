import React, { Component } from 'react';
import SideRev from './SideRev';
import MenuRev from './MenuRev';
import './Review.css';

class Review extends Component {
    constructor(props){
        super(props)
        this.state = {
            UserID: this.props.UserID
        }

        this.id = 1;
    }
    render() {
        return (
            <div className="Review">
                <div className="ReviewSide">
                    <SideRev UserID={this.id} />
                </div>
                <div className="ReviewMain">
                    <MenuRev UserID={this.id} />
                </div>
            </div>
        )
    }
}

export default Review;