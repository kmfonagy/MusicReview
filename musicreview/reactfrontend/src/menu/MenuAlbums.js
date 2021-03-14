import React, { Component } from 'react';
import Album from './Album';
import tempData from '../tempData';
import { Button, GridList, GridListTile } from '@material-ui/core';
import Form from "react-bootstrap/Form";
import './MenuAlbums.css';


class MenuAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            albums: []
        }

        this.UserID = this.props.UserID
        this.value = 0;

    }

    componentDidMount() {
        this.setState({
            albums: tempData.music
        });
    }

    handleInputChanged(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleGenreSearch = name => {
        let filterAlbums = [];
        if (name === "All") {
            filterAlbums = tempData.music;
        } else {
            filterAlbums = tempData.music.filter(
                album => album.Genre === name
            );
        }

        this.setState({
            albums: filterAlbums
        })
        console.log(this.state.albums)
    }

    render() {
        const buttons = [
            { name: "All", value: "All" },
            { name: "Alternative", value: "Alternative" },
            { name: "Blues", value: "Blues" },
            { name: "Classic Rock", value: "Classic Rock" },
            { name: "Country", value: "Country" },
            { name: "Electronic", value: "Electronic" },
            { name: "Hard Rock", value: "Hard Rock" },
            { name: "Hip-Hop/Rap", value: "Hip-Hop/Rap" },
            { name: "Indie", value: "Indie" },
            { name: "Jazz", value: "Jazz" },
            { name: "Metal", value: "Metal" },
            { name: "Pop", value: "Pop" },
            { name: "R&B/Soul", value: "R&B/Soul" },
            { name: "Rock", value: "Rock" }
        ]
        const value = this.state.searchQuery.toLowerCase();
        const albums = this.state.albums.filter(album => {
            if (!value) return true
            if (album.Title.toLowerCase().includes(value) || album.Artist.toLowerCase().includes(value)) {
                return true
            }
        }).map((album) => (
            <GridListTile>
                <Album
                    key={album.ID}
                    title={album.Title}
                    artist={album.Artist}
                    img={album.AlbumArt}
                />
            </GridListTile>
        ))
        return (
            <div className="MenuAlbums">
                <div className="MenuAlbumsHeader">
                    <div className="MenuSearch">
                        <div className="MenuSearchBar">
                            <div className="MenuSearchText">
                                Search:
                            </div>
                            <input
                                className='MenuInput'
                                type="text"
                                value={this.state.searchQuery}
                                onChange={this.handleInputChanged.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="GenreSearch">
                        {buttons.map(({ name, value }) =>
                            <Button
                                key={name}
                                value={value}
                                onClick={this.handleGenreSearch.bind(this, name)}
                            >
                                {name}
                            </Button>
                        )}
                    </div>
                </div>
                <GridList cellHeight={'auto'} className='MenuAlbumList' cols={6}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MenuAlbums;