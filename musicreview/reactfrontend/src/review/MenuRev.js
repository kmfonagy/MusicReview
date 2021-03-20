import React, { Component, useEffect } from 'react';
import AlbumRev from './AlbumRev';
import Form from "react-bootstrap/Form";
import ReviewedList from "./ReviewedList"
import Star from './Star';
import { Button, GridList, GridListTile } from '@material-ui/core';
import { Link, Redirect } from "react-router-dom";
import tempFavs from '../tempFavs.json';
import tempReviews from '../tempReviews.json';
import tempData from '../tempData.json';
import './MenuRev.css';

const reviewPost = async values => {
    // have tried two urls, neither work
    // /api/newReview
    // and
    // https://http://localhost:8080/api/newReview
    const url = '/api/newReview'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        //I had a couple of issue with 'this' key word
        //still not accepting the info
        body: JSON.stringify({
            date: values.created_on,
            description: values.description,
            rating: values.rating,
            title: values.title,
            musicID: values.musicID,
            userID: values.userID
        })
    })
    return resp.json();
}
class MenuRev extends Component {
    static defaultProps = { max: 5 };
    constructor(props) {
        super(props)
        this.state = {
            UserID: this.props.UserID,
            MusicID: 0,
            dynamicValue: props.value,
            value: 0,
            rating: 0,
            title: ``,
            description: ``,
            created_on: ``,
            revDis: false
        }
        this.onTitleChange = this.onInputChange.bind(this, 'title');
        this.onDescChange = this.onInputChange.bind(this, 'description');
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.Clear = this.onClear.bind(this);

        this.album = 1;
        this.revDis = false;
    }

    componentDidMount() {
        for (let i = 0; i < tempReviews.review.length; i++) {
            if (
                tempReviews.review[i].MusicID == this.album &&
                tempReviews.review[i].UserID == this.props.UserID
            ) {
                this.setState(
                    { revDis: true }
                )
            }
        }
        if (tempFavs.favorites.UserID === this.props.UserID) {
            this.setState(
                { fav: true }
            )
        }
        console.log(this.state);
    }

    onInputChange(keyName, event) {
        this.setState(
            {
                [keyName]: event.target.value,
                rating: this.state.dynamicValue,
                created_on: new Date().toLocaleString(),
                MusicID: this.album
            }
        )
    }

    handleClick(newValue) {
        this.setState({
            value: newValue,
            dynamicValue: newValue
        });
        console.log(this.state.value)
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

        const favorited = this.state.fav;
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
                        {tempData.music.filter(music => music.ID == this.album).map((p) => (
                            <AlbumRev
                                key={this.album}
                                img={p.AlbumArt}
                                title={p.Title}
                                artist={p.Artist}
                                duration={p.Duration}
                                release_date={p.Release_date}
                                genre={p.Genre}
                                MusicID={this.album}
                                UserID={this.state.UserID}
                            />
                        ))}
                    </GridListTile>
                    {reviewed ?
                        <GridList id='MenuRevLeft' cellHeight={'auto'}>
                            <div className="UserReviewedList" >
                                <ReviewedList album={this.album} />
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
                                <ReviewedList album={this.album} />
                            </div>
                        </GridListTile>
                    }
                </GridList>
            </div>
        )
    }
}

export default MenuRev;