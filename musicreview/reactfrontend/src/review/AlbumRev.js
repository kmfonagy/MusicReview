import React, { Component } from 'react';
import './AlbumRev.css';


class AlbumRev extends Component {
    render() {
        return (
            <div className="RevAlbumMain">
                <div className="RevAlbumImg">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div className="RevAlbumInfo">
                    <div className="RevAlbumTitle">{this.props.title}</div>
                    <div className="RevAlbumDetails">
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc RevAlbumFillA">artist:</div>
                            <div className="RevAlbumLineFill RevAlbumArtist">{this.props.artist}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">genre:</div>
                            <div className="RevAlbumLineFill">{this.props.genre}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">released:</div>
                            <div className="RevAlbumLineFill">{this.props.release_date}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div className="RevAlbumLineDesc">duration:</div>
                            <div className="RevAlbumLineFill">{this.props.duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumRev;