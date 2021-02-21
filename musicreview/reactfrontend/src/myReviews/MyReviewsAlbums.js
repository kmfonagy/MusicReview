import React, { Component } from 'react';
import Albums from './Albums';
import './MyReviewsAlbums.css';

class MyReviewsAlbums extends Component {
    render() {
        return (
            <div className="albums">
                <div className="albumCards">
                    {this.props.music.map((a) => (
                        <Albums id={a.id} title={a.title} artist={a.artist} img={a.img} />
                    ))}
                </div>
            </div>
        )
    }
}

export default MyReviewsAlbums;