import React, { Component, useEffect } from 'react';
import AlbumRev from './AlbumRev';
import Form from "react-bootstrap/Form";
import ReviewStar from './ReviewStar';
import ReviewedList from "./ReviewedList"
import { Button } from '@material-ui/core';
import tempFavs from './tempFavs.json';
import tempReviews from './tempReviews.json';
import tempData from './tempData.json';
import './MenuRev.css';

class MenuRev extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: 0,
            musicId: 0,
            fav: false,
            rating: 0,
            title: ``,
            description: ``,
            created_on: ``,
            revDis: false
        }
        this.onTitleChange = this.onInputChange.bind(this, 'title');
        this.onDescChange = this.onInputChange.bind(this, 'description');
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.Clear = this.onClear.bind(this);
        
        this.user = 3;
        this.album = 1;
        this.revDis = false;
    }

    componentDidMount() {
        for(let i = 0; i < tempReviews.review.length; i++){
            if(
                tempReviews.review[i].MusicID == this.album &&
                tempReviews.review[i].UserID == this.user
            ){
                this.setState(
                    {revDis: true}
                )
            }
        }
        if(tempFavs.favorites.UserID === this.user) {
            this.setState(
                {fav: true}
            )
        }
    }

    onInputChange(keyName, event) {
        this.setState(
            {[keyName]: event.target.value,
            created_on: new Date().toLocaleString(),
            userId: this.user,
            musicId: this.album}
        )
    }

    onSubmitForm(event){
        console.log(this.state);
        event.preventDefault();
    }

    onClear(){
        this.setState(
            {
                title: '',
                description: '',
                created_on: '',
                userId: 0,
                musicId: 0
            }
        )
    }

    render() {
        
        const favorited = this.state.fav;
        const reviewed = this.state.revDis;

        
        
        return(
            <div className="MenuRev">
                <div className="MenuRevAlbum">
                    {tempData.music.filter(music => music.id == this.album).map((p) => (
						<AlbumRev
                            key={this.album}
                            img={p.img}
                            title={p.title}
                            artist={p.artist}
                            duration={p.duration}
                            release_date={p.release_date}
                            genre={p.genre}
                            fav={favorited}
                        />
					))}
                </div>
                
                {reviewed ? <div className='MenuRevLeft'></div> :
                    <Form  onSubmit={this.onSubmitForm}>
                            <div className="MenuRevStarTitle">
                                <div className="RevStar">
                                    <ReviewStar />
                                </div>
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
                        </Form>}
                <div className="ReviewsList">
                    <ReviewedList album={this.album}/>
                </div>
            </div>
        )
    }
}

export default MenuRev;