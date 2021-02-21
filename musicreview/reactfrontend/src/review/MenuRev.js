import React, { Component } from 'react';
import AlbumRev from './AlbumRev';
import ReviewStar from './ReviewStar';
import { Button, TextField } from '@material-ui/core';
import './MenuRev.css';
import { RotateRightSharp } from '@material-ui/icons';

class MenuRev extends Component {
    // Can be deleted once connected to database
    static defaultProps = {
        music : [
            {
                id: 1,
                title: 'Medicine at Midnight',
                artist: 'Foo Fighters',
                release_date: '02/12/2021',
                duration: '00:37',
                rating: 3,
                genre: 'Rock',
                img: 'https://media.pitchfork.com/photos/5ff365a123155174547abec2/1:1/w_320/Foo-Fighters.jpg'
            }

        ],
        review : [
            {
                id: 1,
                title: `Great work Fighters!`,
                description: `It's the zippiest Foos album to date. ... As a modern rock melting pot, Medicine certainly sounds like a spirit rediscovered.`,
                created_on: `02/18/2021`
            }

        ]
    };
    
    render() {
        return(
            <div className="MenuRev">
                <div className="MenuRevAlbum">
                    {this.props.music.map((p) => (
						<AlbumRev
                            id={p.id}
                            img={p.img}
                            title={p.title}
                            artist={p.artist}
                            duration={p.duration}
                            release_date={p.release_date}
                            genre={p.genre}
                        />
					))}
                </div>
                <div className="MenuRevStarTitle">
                    <div  className="RevStar">
                        {this.props.music.map((p) => (
                            <ReviewStar id={p.id} stars={p.rating} />
                        ))}
                    </div>
                    <div className="TitleBlock">
                        <div className="RevTitle">
                            Title: 
                        </div>
                        {this.props.review.map((p) => (
                            <input className='TitleField' id="search" name="search" value={p.title}></input>
                        ))}
                    </div>
                </div>
                {this.props.review.map((p) => (
                    <textarea
                        className="MenuRevDesc"
                        id="outlined-textarea"
                        label="Description"
                        variant="outlined"
                        rows="8"
                        value={p.description}
                        // onChange={handleChange}
                    ></textarea>
                ))}
                {/* <div className="MenuRevButtons">
                    <div className="CreatedOn">
                        created: {this.props.review.created_on}
                    </div>
                    <Button id="review-clear">Clear</Button>
                    <Button id="review-submit">Submit</Button>
                </div> */}
            </div>
        )
    }
}

export default MenuRev;