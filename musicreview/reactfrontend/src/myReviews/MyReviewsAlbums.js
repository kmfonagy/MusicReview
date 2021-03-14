import React, { Component } from 'react';
import { Button, GridList, GridListTile } from '@material-ui/core';
import Album from '../menu/Album';
import tempData from '../tempData.json';
import tempReviews from '../tempReviews.json';
import './MyReviewsAlbums.css';

class MyReviewsAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: []
        }
        this.filterMusic = []
        this.UserID = this.props.UserID;
    }

    componentDidMount() {
        console.log(tempReviews.review)
        let review = tempReviews.review;
        let music = tempData.music;
        let filterRev = [];
        let filterMusic = this.filterMusic;

        filterRev = review.filter(rev => rev.UserID == this.UserID);

        music.forEach(album =>
            filterRev.forEach(rev => {
                if (album.ID == rev.MusicID) {
                    filterMusic.push({
                        key: album.ID,
                        ID: album.ID,
                        Title: album.Title,
                        Artist: album.Artist,
                        AlbumArt: album.AlbumArt,
                        Genre: album.Genre
                    })
                }
            }))

        console.log(filterRev, filterMusic)
        this.setState({
            music: filterMusic
        })
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
            <div className="MyRevsAlbums">
                <div className="MyRevsHeader">
                    <div className="MyRevsHeaderText" >My Reviews</div>
                </div>
                <div className="MyRevsGenreSearch">
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
                <GridList cellHeight={'auto'} className="AlbumCards" cols={6}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MyReviewsAlbums;
