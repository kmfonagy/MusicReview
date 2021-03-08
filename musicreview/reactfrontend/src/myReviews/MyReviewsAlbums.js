import React, { Component } from 'react';
import Album from '../menu/Album';
import tempData from './tempData.json';
import tempReviews from './tempReviews.json';
import './MyReviewsAlbums.css';

class MyReviewsAlbums extends Component {
    constructor(props){
        super(props);
        this.user = 4;
    }

    

    render() {
        console.log(tempData.music[2].id);
        return (
            <div className="MyRevsAlbums">
                <div className="MyRevsHeader">My Reviews</div>
                <div className="MyRevsAlbumCards">
                    {tempData.music
                        .filter(music => {
                            for(let i = 1; i < tempReviews.review.length; i++) {
                                if(music.id == tempReviews.review[i].MusicID && this.user == tempReviews.review[i].UserID){
                                    return true;
                                }
                            }
                        }).map((music) => (
                            <Album key={music.id} title={music.title} artist={music.artist} img={music.img} />
                    ))}
                </div>
            </div>
        )
    }
}

export default MyReviewsAlbums;