import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Album.css';

class Album extends Component {
    constructor(props){
        super(props)
        this.state = {
            albumClick: false
        }
        
        this.handleClick = this.handleClick.bind(this);    
    }
    
    async handleClick(event) {
        event.preventDefault();
        const retAlbum = this.props.id;
        localStorage.setItem(`albumID`, retAlbum)
        console.log(`AlbumID stored to LocalStorage ` + retAlbum)
        this.CheckPass()
    }

    CheckPass() {
        this.setState({
            albumClick: true
        })
    }

    render() {
        if(this.state.albumClick) {
            return <Redirect to={`/album-review/${this.props.id}`} />
        }
        return (
            <div className="AlbumMain" key={this.props.id}>
                <Link 
                    id='album-link' 
                    to={`/album-review/${this.props.id}`}
                    style={{ textDecoration: 'none' }}
                    onClick={this.handleClick}
                >
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
