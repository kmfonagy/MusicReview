import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Album.css';

class Album extends Component {
    render() {
        return (
            <div className="AlbumMain">
                <Link id='album-link' to="/album-review" style={{ textDecoration: 'none' }}>
                    <div className="AlbumImg">
                        <img src={this.props.img} alt={this.props.title} />
                    </div>
                </Link>
                    
                        
                <div className="AlbumText">
                    <div className="AlbumTitle">{this.props.title}</div>
                    <div className="AlbumArtist">By: {this.props.artist}</div>
                </div>
            </div>
        )
    }
}

export default Album;
