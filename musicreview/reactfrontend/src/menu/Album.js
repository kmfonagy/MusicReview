import React, { Component } from 'react';
import './Album.css';

class Album extends Component {
    render() {
        return (
            <div className="AlbumMain">
                <div className="AlbumImg">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div className="AlbumText">
                    <div className="AlbumTitle">{this.props.title}</div>
                    <div className="AlbumArtist">by: {this.props.artist}</div>
                </div>
            </div>
        )
    }
}

export default Album;