import React, { Component } from 'react';
import AlbumRev from './AlbumRev';
import Form from "react-bootstrap/Form";
import ReviewedList from "./ReviewedList"
import Star from './Star';
import { Button, GridList, GridListTile } from '@material-ui/core';
import './MenuRev.css';

const reviewPost = async values => {
    const url = '/api/newReview'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            created_On: values.created_on,
            description: values.description,
            rating: values.dynamicValue,
            title: values.title,
            musicID: values.MusicID,
            userID: values.UserID
        })
    })
    return resp.json();
}

const myReviewPost = async values => {
    const url = '/api/newMyReview'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            musicID: values.MusicID,
            userID: values.UserID
        })
    })
    return resp.json();
}
class MenuRev extends Component {
    static defaultProps = { max: 5 };
    constructor(props) {
        super(props)
        this.state = {
            UserID: localStorage.getItem("userID"),
            MusicID: this.props.musicID,
            dynamicValue: props.value,
            value: 0,
            rating: 0,
            title: ``,
            description: ``,
            created_on: ``,
            revDis: false,
            album_Art: ``,
            album_Title: ``,
            album_Artist: ``,
            album_Duration: 0,
            release_Date: ``,
            album_Genre: ``

        }

        this.onTitleChange = this.onInputChange.bind(this, 'title');
        this.onDescChange = this.onInputChange.bind(this, 'description');
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.Clear = this.onClear.bind(this);
        this.revDis = false;
    }

    componentDidMount() {
        console.log("musicID passed down " + localStorage.getItem("musicID"))
        Promise.all([
            fetch('/api/getMyReviewByUserId/' + this.state.UserID).then(res => res.json()),
            fetch('/api/getAlbumById/' + this.state.MusicID).then(res => res.json())
        ]).then(([revs, album]) => {
            console.log(revs)
            console.log(album)
            for (let i = 0; i < revs.length; i++) {
                if(album.id == revs[i].musicID){
                    this.setState({
                        revDis: true
                    })
                }
            }
            this.setState({
                album_Art: album.album_Art,
                album_Title: album.title,
                album_Artist: album.artist,
                album_Duration: album.duration,
                release_Date: album.release_Date,
                album_Genre: album.genre
            })
            console.log("Album being reviewed " + this.state.album_Title + ", " + this.state.album_Artist + ", " + this.state.album_Art + ", " + this.state.album_Duration + ", " + this.state.album_Genre + ", " + this.state.release_Date + ", " + this.state.revDis)
        }).catch((error) => {
            console.log(error);
        });
    }

    onInputChange(keyName, event) {
        this.setState(
            {
                [keyName]: event.target.value,
                rating: this.state.dynamicValue,
                created_on: (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear(),
                MusicID: this.state.MusicID
            }
        )
    }

    handleClick(newValue) {
        this.setState({
            value: newValue,
            dynamicValue: newValue
        });
        console.log(this.state.dynamicValue)
    }

    handleMouseEnter(newValue) {
        this.setState({ dynamicValue: newValue });
    }

    handleMouseLeave(newValue) {
        this.setState({ dynamicValue: this.state.value });
    }

    async onSubmitForm(event) {
        console.log(this.state);
        event.preventDefault();
        await reviewPost(this.state);
        await myReviewPost(this.state);
        this.setState({
            revDis: true
        })
    }

    onClear() {
        this.setState(
            {
                title: '',
                description: '',
                created_on: '',
                rating: 0,
            }
        )
    }

    render() {

        const reviewed = this.state.revDis;
        const { dynamicValue } = this.state;
        const starSpans = [];
        const max = this.props.max;

        for (let v = 1; v <= max; v++) {
            starSpans.push(
                <Star
                    key={v}
                    color={"#cccccc"}
                    isFilled={v <= dynamicValue}
                    value={v}
                    handleHover={this.handleMouseEnter}
                    handleHoverLeave={this.handleMouseLeave}
                    handleClick={this.handleClick}
                />
            );
        }

        return (
            <div className="MenuRev">
                <GridList cellHeight={'auto'} className='MenuRevAlbum' cols={1}>
                    <GridListTile className="MenuRevAlbum">

                        <AlbumRev
                            key={this.state.MusicID}
                            img={this.state.album_Art}
                            title={this.state.album_Title}
                            artist={this.state.album_Artist}
                            duration={this.state.album_Duration}
                            release_date={this.state.release_Date}
                            genre={this.state.album_Genre}
                            MusicID={this.state.MusicID}
                        />
                    </GridListTile>
                    {reviewed ?
                        <GridList className='MenuRevLeft' cellHeight={'auto'}>
                            <div className="UserReviewedList" >
                                <ReviewedList album={this.state.MusicID} />
                            </div>
                        </GridList> :
                        <GridListTile cellHeight={'auto'} className="MenuRevForm">
                            <Form onSubmit={this.onSubmitForm}>
                                <div className="MenuRevStarTitle">
                                    <div className="TitleBlock">
                                        <div className="RevTitle">
                                            Title:
                                        </div>
                                        <input
                                            className='TitleField'
                                            value={this.state.title}
                                            onChange={this.onTitleChange}
                                        />
                                    </div>
                                    <div className="RevStar">
                                        {starSpans}
                                    </div>
                                </div>
                                <textarea
                                    className="MenuRevDesc"
                                    id="outlined-textarea"
                                    label="Description"
                                    variant="outlined"
                                    rows="8"
                                    value={this.state.description}
                                    onChange={this.onDescChange}
                                />
                                <div className="MenuRevButtons">
                                    <div className="ButtonBlock">
                                        <Button id="review-clear" onClick={this.Clear}>Clear</Button>
                                        <Button id="review-submit" type="submit" >Submit</Button>
                                    </div>
                                </div>
                            </Form>
                            <div className="ReviewsList">
                                <ReviewedList album={this.state.MusicID} />
                            </div>
                        </GridListTile>
                    }
                </GridList>
            </div>
        )
    }
}

export default MenuRev;