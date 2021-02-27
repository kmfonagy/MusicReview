import React, { Component } from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Albums.css";

class Albums extends Component {
    render() {
        return (
            <div className="albumsMain">
                <Link to="/review" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        <div className="albumsImage">
                            <img src={this.props.img} alt={this.props.title} />
                        </div>
                    </Button>
                </Link>
                <div className="albumsText">
                    <div className="albumsTitle">{this.props.title}</div>
                    <div className="albumsArtist">by: {this.props.artist}</div>
                </div>
            </div>
        )
    }
}

export default Albums;