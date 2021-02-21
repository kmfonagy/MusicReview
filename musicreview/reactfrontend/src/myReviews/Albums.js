import React, { Component } from "react";
import "./Albums.css";

class Albums extends Component {
    render() {
        return (
            <div className="albumsMain">
                <div className="albumsImage">

                </div>
                <div className="albumsText">
                    <div className="albumsTitle">{this.props.title}</div>
                    <div className="albumsArtist">by: {this.props.artist}</div>"
                </div>
            </div>
        )
    }
}

export default Albums;