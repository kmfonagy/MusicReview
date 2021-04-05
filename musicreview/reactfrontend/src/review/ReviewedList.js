import React, { Component } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import ReviewedStar from './ReviewedStar';
import './ReviewedItem.css';


class ReviewedList extends Component {
    constructor(props){
        super(props)
        this.state = {
            revDis: false,
            reviews: [],
            users: []
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('/api/getMyReviewByUserId/' + localStorage.getItem("userID")).then(res => res.json()),
            fetch('/api/getAllReviews/' + this.props.album).then(res => res.json()),
            fetch('/api/getAllUsers').then(res => res.json())
        ]).then(([userRev, albumRev, allUsers]) => {
            console.log("User reviews fetched to check", userRev)
            console.log("Album reviews fetched", albumRev)
            console.log(`Users fetched for Reviews info`, allUsers)
            let filterReviews = []
            for (let i = 0; i < userRev.length; i++) {
                if(this.props.album == userRev[i].musicID){
                    this.setState({
                        revDis: true
                    })
                }
            }
            for (let i = 0; i < allUsers.length; i++) {
                for (let j = 0; j < albumRev.length; j++) {
                    if(albumRev[j].userID == allUsers[i].id) {
                        console.log(`User match found`, allUsers[i])
                        filterReviews.push({
                            id: albumRev[j].id,
                            title: albumRev[j].title,
                            rating: albumRev[j].rating,
                            description: albumRev[j].description,
                            date: albumRev[j].created_On,
                            username: allUsers[i].name
                        })
                    }
                }
            }
            this.setState({
                reviews: filterReviews
            })
            console.log("Reviews set", this.state.reviews, "Filtered reviews", filterReviews)
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const reviewList = [];
        if(this.state.revDis){
            return (
                <div className='RevListTrue'>
                    <GridList cellHeight={'auto'} className='RevGridList' cols={1}>
                        {this.state.reviews.map((review) => (
                            <GridListTile className="RevItem" key={review.id} cols={review.cols || 1}>
                                <div className="RevItemHead">
                                    <div className="ReviewedTitle">
                                        {review.title}
                                    </div>
                                    <div className="ReviewedStar">
                                        <ReviewedStar value={review.rating} />
                                    </div>
                                </div>
                                <div className="RevItemDesc">
                                    {review.description}
                                </div>
                                <div className="RevItemFoot">
                                    <div className="RevItemUser">By: {review.username}</div>
                                    <div className="RevItemDate">Created On: {review.date}</div>
                                </div>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );
        } else {
            return (
                <div className='RevListFalse'>
                    <GridList cellHeight={'auto'} className='RevGridList' cols={1}>
                        {this.state.reviews.map((review) => (
                            <GridListTile className="RevItem" key={review.id} cols={review.cols || 1}>
                                <div className="RevItemHead">
                                    <div className="ReviewedTitle">
                                        {review.title}
                                    </div>
                                    <div className="ReviewedStar">
                                        <ReviewedStar value={review.rating} />
                                    </div>
                                </div>
                                <div className="RevItemDesc">
                                    {review.description}
                                </div>
                                <div className="RevItemFoot">
                                    <div className="RevItemUser">By: {review.username}</div>
                                    <div className="RevItemDate">Created On: {review.date}</div>
                                </div>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );
        }
    }
}

export default ReviewedList;