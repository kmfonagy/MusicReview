import React, { Component } from 'react';
import { Button, GridList, GridListTile } from '@material-ui/core';
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
        let filterAlbums = [];
        if (name === "All") {
            filterAlbums = this.filterMusic;
        } else {
            filterAlbums = this.filterMusic.filter(
                album => album.Genre === name
            );
        }

        this.setState({
            music: filterAlbums
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
                    </div>
                    <div className="MyFavsGenreSearch">
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
                <GridList cellHeight={'auto'} className="AlbumCards" cols={6}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MenuFavs;