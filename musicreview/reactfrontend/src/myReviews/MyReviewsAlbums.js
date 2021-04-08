import React, { Component } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';
import Album from '../menu/Album';
import './MyReviewsAlbums.css';

class MyReviewsAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            filtered: [],
            width: window.innerWidth,
            columns: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.UserID = localStorage.getItem("userID");
    }

    componentDidMount() {
        Promise.all([
            fetch('/api/getMyReviewByUserId/' + this.UserID).then(res => res.json()),
            fetch('/api/getAllAlbums').then(res => res.json())
        ]).then(([revs, albs]) => {
            let filterMusic = []
            for (let i = 0; i < albs.length; i++) {
                for (let j = 0; j < revs.length; j++) {
                    if (albs[i].id == revs[j].musicID) {
                        filterMusic.push({
                            key: albs[i].id,
                            id: albs[i].id,
                            title: albs[i].title,
                            artist: albs[i].artist,
                            album_Art: albs[i].album_Art,
                            genre: albs[i].genre,
                            release_Date: albs[i].release_Date
                        })
                    }
                }
            }
            this.setState({
                albums: filterMusic
            })
            console.log("componentDidMount Albums", this.state.albums)
        }).catch((error) => {
            console.log(error);
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        if (this.state.width >= 2231) {
            this.setState({
                columns: 12
            })
        }
        if (this.state.width <= 2230) {
            this.setState({
                columns: 11
            })
        }
        if (this.state.width <= 2080) {
            this.setState({
                columns: 10
            })
        }
        if (this.state.width <= 1920) {
            this.setState({
                columns: 9
            })
        }
        if (this.state.width <= 1730) {
            this.setState({
                columns: 8
            })
        }
        if (this.state.width <= 1570) {
            this.setState({
                columns: 7
            })
        }
        if (this.state.width <= 1410) {
            this.setState({
                columns: 6
            })
        }
        console.log("Window width at mount end", this.state.width)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
        if (this.state.width >= 2231) {
            this.setState({
                columns: 12
            })
        }
        if (this.state.width <= 2230) {
            this.setState({
                columns: 11
            })
        }
        if (this.state.width <= 2080) {
            this.setState({
                columns: 10
            })
        }
        if (this.state.width <= 1920) {
            this.setState({
                columns: 9
            })
        }
        if (this.state.width <= 1730) {
            this.setState({
                columns: 8
            })
        }
        if (this.state.width <= 1570) {
            this.setState({
                columns: 7
            })
        }
        if (this.state.width <= 1410) {
            this.setState({
                columns: 6
            })
        }
    }

    handleGenreSearch = name => {
        if (name === "All") {
            Promise.all([
                fetch('/api/getMyReviewByUserId/' + this.UserID).then(res => res.json()),
                fetch('/api/getAllAlbums').then(res => res.json())
            ]).then(([revs, albs]) => {
                let filterMusic = []
                for (let i = 0; i < albs.length; i++) {
                    for (let j = 0; j < revs.length; j++) {
                        if (albs[i].id == revs[j].musicID) {
                            filterMusic.push({
                                key: albs[i].id,
                                id: albs[i].id,
                                title: albs[i].title,
                                artist: albs[i].artist,
                                album_Art: albs[i].album_Art,
                                genre: albs[i].genre,
                                release_Date: albs[i].release_Date
                            })
                        }
                    }
                }
                this.setState({
                    albums: this.filterMusic
                })
                console.log("Filtered All Albums", this.state.albums)
            }).catch((error) => {
                console.log(error);
            });
        } else {
            Promise.all([
                fetch('/api/getMyReviewByUserId/' + this.UserID).then(res => res.json()),
                fetch('/api/getAllAlbums').then(res => res.json())
            ]).then(([revs, albs]) => {
                console.log(albs)
                let filterMusic = []
                let filterAlbums = []
                for (let i = 0; i < albs.length; i++) {
                    for (let j = 0; j < revs.length; j++) {
                        if (albs[i].id == revs[j].musicID) {
                            filterMusic.push({
                                key: albs[i].id,
                                id: albs[i].id,
                                title: albs[i].title,
                                artist: albs[i].artist,
                                album_Art: albs[i].album_Art,
                                genre: albs[i].genre,
                                release_Date: albs[i].release_Date
                            })
                        }
                    }
                }
                console.log("filterMusic", filterMusic)
                if (name === "Classic Rock") {
                    for (let i = 0; i < filterMusic.length; i++) {
                        if (Number(filterMusic[i].release_Date) < 1996 &&
                            (filterMusic[i].genre === "Rock" || filterMusic[i].genre === "Metal" ||
                                filterMusic[i].genre === "Alternative" || filterMusic[i].genre === "Hard Rock" ||
                                filterMusic[i].genre === "Punk" || filterMusic[i].genre === "Singer/Songwriter")
                        ) {
                            console.log(filterMusic[i])
                            filterAlbums.push({
                                key: filterMusic[i].id,
                                id: filterMusic[i].id,
                                title: filterMusic[i].title,
                                artist: filterMusic[i].artist,
                                album_Art: filterMusic[i].album_Art,
                                genre: filterMusic[i].genre,
                                release_Date: filterMusic[i].release_Date
                            })
                        }
                    }
                }
                for (let i = 0; i < filterMusic.length; i++) {
                    if (filterMusic[i].genre === name) {
                        console.log(filterMusic[i])
                        filterAlbums.push({
                            key: filterMusic[i].id,
                            id: filterMusic[i].id,
                            title: filterMusic[i].title,
                            artist: filterMusic[i].artist,
                            album_Art: filterMusic[i].album_Art,
                            genre: filterMusic[i].genre,
                            release_Date: filterMusic[i].release_Date
                        })
                    }
                }
                console.log("filterAlbums", filterAlbums)
                console.log("filterAlbums Length", filterAlbums.length)
                if (filterAlbums.length === 0) {
                    this.setState({
                        albums: []
                    })
                } else {
                    this.setState({
                        albums: filterAlbums
                    })
                }

                console.log("Filtered Music", this.state.albums)
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
            { name: "Comedy", value: "Comedy" },
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
        const albums = this.state.albums.map(album => (
            <GridListTile key={album.id}>
                <Album
                    key={album.id}
                    id={album.id}
                    title={album.title}
                    artist={album.artist}
                    img={album.album_Art}
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
                <GridList cellHeight={'auto'} className="RevAlbumList" cols={12}>
                    {albums}
                </GridList>
            </div>
        )
    }
}

export default MyReviewsAlbums;
