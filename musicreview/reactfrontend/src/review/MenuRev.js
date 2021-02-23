import React, { Component } from 'react';
import AlbumRev from './AlbumRev';
import ReviewStar from './ReviewStar';
import { Button, Typography } from '@material-ui/core';
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
                rating: 4,
                genre: 'Rock',
                img: 'https://media.pitchfork.com/photos/5ff365a123155174547abec2/1:1/w_320/Foo-Fighters.jpg'
            }

        ],
        review : [
            {
                id: 1,
                title: `Great work Fighters!`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dapibus egestas. Fusce a urna sed nunc tincidunt rhoncus. Nunc quis ex at felis auctor dapibus. In varius aliquam metus eget tempor. Ut auctor eros id ligula facilisis tincidunt. Etiam consectetur quis massa in eleifend. Vivamus non turpis dapibus, rutrum nibh eget, accumsan ante.`,
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
                <div className="MenuRevButtons">
                    {this.props.review.map((p) => (
                        <Typography className="CreatedOn">created: {p.created_on}</Typography>
                    ))}
                    <div className="ButtonBlock">
                        <Button id="review-clear">Clear</Button>
                        <Button id="review-submit">Submit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuRev;