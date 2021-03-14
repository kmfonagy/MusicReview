import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import tempReviews from '../tempReviews.json';
import tempUsers from '../tempUsers.json';
import ReviewedStar from './ReviewedStar';
import './ReviewedItem.css';



export default function ReviewedList() {
    return (
        <div className='RevList'>
            <GridList cellHeight={'auto'} className='RevGridList' cols={1}>
                {tempReviews.review.filter(item => {
                    if (item.MusicID === 1) {
                        return true
                    }
                }).map((item) => (
                    <GridListTile className="RevItem" key={item.img} cols={item.cols || 1}>
                        <div className="RevItemHead">
                            <div className="ReviewedTitle">
                                {item.title}
                            </div>
                            <div className="ReviewedStar">
                                <ReviewedStar value={item.rating} />
                            </div>
                        </div>
                        <div className="RevItemDesc">
                            {item.description}
                        </div>
                        <div className="RevItemFoot">
                            <div className="RevItemUser">By: {tempUsers.user.filter(user => user.ID == item.UserID).map((user) => (
                                user.Username
                            ))}</div>
                            <div className="RevItemDate">Created On: {item.created_on}</div>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}