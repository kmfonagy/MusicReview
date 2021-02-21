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
                            <div>by:</div><div>{this.props.artist}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div>genre:</div><div>{this.props.genre}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div>release date:</div><div>{this.props.release_date}</div>
                        </div>
                        <div className="RevAlbumLine">
                            <div>duration:</div><div>{this.props.duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumRev;