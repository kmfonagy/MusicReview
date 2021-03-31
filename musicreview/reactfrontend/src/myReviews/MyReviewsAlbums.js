import React, { Component } from 'react';
import { Button, GridList, GridListTile } from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';
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
                    <div className="MyRevsHeaderTitle">
                        <div className="MyRevsHeaderText" >My Reviews</div>
                        <div className="MyRevsFilter">
                            <div className="MyRevsFilterText">Filter:</div>
                            <Dropdown className="RevDropdown">
                                <Dropdown.Toggle variant="success" className="RevGenreToggle">
                                    Genre
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="RevGenreDropdown">
                                    {buttons.map(({ name, value }) => 
                                        <Dropdown.Item 
                                            className="RevGenreButton"
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

export default MyReviewsAlbums;
