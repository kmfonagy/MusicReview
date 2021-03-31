import React, { Component } from 'react';
import Album from './Album';
import { Button, GridList, GridListTile } from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';
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
        Promise.all([
            fetch('/api/getAllAlbums').then(res => res.json())
        ]).then(([allAlbums]) => {
            this.setState(
                {
                    albums: allAlbums
                }
            )
            console.log(this.state.albums)
        }).catch((error) => {
            console.log(error);
        });
    }

    handleInputChanged(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleGenreSearch = (name) => {
        if (name === "All") {
            Promise.all([
                fetch('/api/getAllAlbums').then(res => res.json())
            ]).then(([allAlbums]) => {
                this.setState(
                    {
                        albums: allAlbums
                    }
                )
                console.log(this.state.albums)
            }).catch((error) => {
                console.log(error);
            });
        } else {
            Promise.all([
                fetch('/api/getAllAlbums').then(res => res.json())
            ]).then(([allAlbums]) => {
                let filterAlbums = []
                if (name === "Classic Rock"){
                    for (let i = 0; i < allAlbums.length; i++) {
                        if (Number(allAlbums[i].release_Date) < 1996 && 
                            (allAlbums[i].genre === "Rock" || allAlbums[i].genre === "Metal" ||
                            allAlbums[i].genre === "Alternative" || allAlbums[i].genre === "Hard Rock" ||
                            allAlbums[i].genre === "Punk" || allAlbums[i].genre === "Singer/Songwriter") 
                        ) {
                            console.log(allAlbums[i])
                            filterAlbums.push(allAlbums[i])
                        }
                    }
                }
                for (let i = 0; i < allAlbums.length; i++) {
                    if (allAlbums[i].genre === name) {
                        console.log(allAlbums[i])
                        filterAlbums.push(allAlbums[i])
                    }
                }
                this.setState(
                    {
                        albums: filterAlbums
                    }
                )
                console.log(this.state.albums)
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        const buttons = [
            { name: "All", value: "All" },
            { name: "Alternative", value: "Alternative" },
            { name: "Blues", value: "Blues" },
            { name: "Christian", value: "Christian" },
            { name: "Classic Rock", value: "Classic Rock" },
            { name: "Classical", value: "Classical" },
            { name: "Country", value: "Country" },
            { name: "Dance", value: "Dance" },
            { name: "Electronic", value: "Electronic" },
            { name: "Hard Rock", value: "Hard Rock" },
            { name: "Hip-Hop/Rap", value: "Hip-Hop/Rap" },
            { name: "Holiday", value: "Holiday" },
            { name: "Jazz", value: "Jazz" },
            { name: "K-Pop", value: "K-Pop" },
            { name: "Latin", value: "Latin" },
            { name: "Metal", value: "Metal" },
            { name: "Pop", value: "Pop" },
            { name: "R&B/Soul", value: "R&B/Soul" },
            { name: "Reggae", value: "Reggae" },
            { name: "Rock", value: "Rock" },
            { name: "Singer/Songwriter", value: "Singer/Songwriter" },
            { name: "Soundtrack", value: "Soundtrack" }
        ]
        const value = this.state.searchQuery.toLowerCase();
        const albums = this.state.albums.filter(album => {
            if (!value) return true
            if (album.Title.toLowerCase().includes(value) || album.Artist.toLowerCase().includes(value)) {
                return true
            }
        }).map((album) => (
            <GridListTile key={album.id}>
                <Album
                    key={album.id}
                    title={album.title}
                    artist={album.artist}
                    img={album.album_Art}
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
                        <div className="MenuFilter">
                            <div className="MenuFilterText">Filter:</div>
                            <Dropdown className="MenuDropdown">
                                <Dropdown.Toggle variant="success" className="MenuGenreToggle">
                                    Genre
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="MenuGenreDropdown">
                                    {buttons.map(({ name, value }) => 
                                        <Dropdown.Item 
                                            className="MenuGenreButton"
                                            key={name}
                                            value={value}
                                            onClick={this.handleGenreSearch.bind(this, name)}
                                        >{name}</Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <GridList cellHeight={'auto'} className='MenuAlbumList' cols={12}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MenuAlbums;