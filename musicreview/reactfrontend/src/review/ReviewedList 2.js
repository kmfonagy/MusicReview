import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tempReviews from './tempReviews.json';
import ReviewedStar from './ReviewedStar';
import './ReviewedItem.css';



export default function ReviewedList() {
    return (
        <div className='RevList'>
            <GridList cellHeight={160} className='RevGridList' cols={1}>
                {tempReviews.review.filter(item => {
                    if (item.MusicID === 1) {
                        return true
                    }
                })
                    .map((item) => (
                        <GridListTile className="RevItem" key={item.id} cols={item.cols || 1}>
                            <div className="RevItemHead">
                                <div className="ReviewedTitle">
                                    {item.title}
                                </div>
                                <div className="ReviewedStar">
                                    <ReviewedStar value={item.rating}/>
                                </div>
                            </div>
                            <div className="RevItemDesc">
                                {item.description}
                            </div>
                            <div className="RevItemFoot">
                                <div className="RevItemUser">By: {item.user}</div>
                                <div className="RevItemDate">Created On: {item.created_on}</div>
                            </div>
                        </GridListTile>
                    ))}
            </GridList>
        </div>
    );
}