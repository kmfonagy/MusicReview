import React, { Component } from 'react';
import { Button, GridList, GridListTile } from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';
import Album from '../menu/Album';
import tempData from '../tempData.json';
import tempFavs from '../tempFavs.json';
import './MenuFavs.css';

class MenuFavs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
            faved: [],
            albums: []
        }
        this.filterMusic = []
        this.UserID = this.props.UserID;
    }

    componentDidMount() {
        Promise.all([
            fetch('/api/getFavoriteByUserId/' + this.UserID).then(res => res.json()),
            fetch('/api/getAllAlbums').then(res => res.json())
        ]).then(([favs, albs]) => {
            let filterMusic = this.filterMusic
            this.setState({
                faved: favs,
                albums: albs
            })
            this.state.albums.forEach(album => 
                this.state.faved.forEach(fav => {
                    if (album.id == fav.musicID) {
                        filterMusic.push({
                            key: album.id,
                            ID: album.id,
                            Title: album.title,
                            Artist: album.artist,
                            Album_Art: album.album_Art,
                            Genre: album.genre
                        })
                    }
                }))
            this.setState({
                music: this.filterMusic
            })
            console.log(this.state.music)
        }).catch((error) => {
            console.log(error);
        });
    }

    handleGenreSearch = name => {
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
        ];

        const music = this.state.music;
        const albums = music.map(album => (
            <GridListTile key={album.ID}>
                <Album
                    key={album.ID}
                    id={album.ID}
                    title={album.Title}
                    artist={album.Artist}
                    img={album.Album_Art}
                />
            </GridListTile>
        ))
        return (
            <div className="FavAlbums">
                <div className="MyFavsHeader">
                    <div className="MyFavsHeaderTitle" >
                        <div className="MyFavsHeaderText">
                            My Favorites
                        </div>
                        <div className="FavFilter">
                            <div className="FavFilterText">Filter:</div>
                            <Dropdown className="FavDropdown">
                                <Dropdown.Toggle variant="success" className="FavGenreToggle">
                                    Genre
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="FavGenreDropdown">
                                    {buttons.map(({ name, value }) => 
                                        <Dropdown.Item 
                                            className="FavGenreButton"
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
                <GridList cellHeight={'auto'} className="AlbumCards" cols={12}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MenuFavs;