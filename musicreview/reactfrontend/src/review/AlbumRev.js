import React, { Component } from 'react';
import ReviewHeart from "./ReviewHeart";
import './AlbumRev.css';


class AlbumRev extends Component {

    render() {
        console.log('Album being reviewed: Title: ' + this.props.title + ', Artist: ' + this.props.artist + ', UserID: ' + this.props.UserID);
        return (
            <div className="RevAlbumMain">
                <div className="RevAlbumImg">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div className="RevAlbumInfo">
                    <div className="RevTitleBlock">
                        <div className="RevAlbumTitle">
                            {this.props.title}
                        </div>
                        <div className="RevHeart">
                            <ReviewHeart
                                album={this.props.MusicID}
                                UserID={this.props.UserID}
                            />
                        </div>
                    </div>
                    <div className="RevAlbumDetails">
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc RevAlbumFillA">Artist:</div>
                            <div className="RevAlbumLineFill RevAlbumArtist">{this.props.artist}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">Genre:</div>
                            <div className="RevAlbumLineFill">{this.props.genre}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">Released:</div>
                            <div className="RevAlbumLineFill">{this.props.release_date}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">Duration:</div>
                            <div className="RevAlbumLineFill">{this.props.duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumRev;