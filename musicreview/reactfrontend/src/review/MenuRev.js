import React, { Component } from 'react';
import AlbumRev from './AlbumRev';
import ReviewStar from './ReviewStar';
import { Button, TextField } from '@material-ui/core';
import './MenuRev.css';

class MenuFavs extends Component {
    // Can be deleted once connected to database
    static defaultProps = {
        music : [
            {
                id: 1,
                title: 'Medicine at Midnight',
                artist: 'Foo Fighters',
                release_date: '02/12/2021',
                duration: '00:37',
                rating: 5,
                genre: 'Rock',
                img: 'https://media.pitchfork.com/photos/5ff365a123155174547abec2/1:1/w_320/Foo-Fighters.jpg'
            }

        ]
    };

    static defaultProps = {
        review : [
            {
                id: 1,
                title: 'Medicine at Midnight',
                description: 'Foo Fighters',
                created_on: '02/18/2021'
            }

        ]
    };
    
    render() {
        return(
            <div className="MenuRev">
                <div className="MenuRevAlbum">
                    {this.props.music.map((p) => (
						<AlbumRev id={p.id} title={p.title} artist={p.artist} img={p.img} />
					))}
                </div>
                <div className="MenuRevStarTitle">
                    {this.props.music.map((p) => (
                        <ReviewStar id={p.id} rating={p.rating} />
                    ))}
                    <TextField id="outlined-basic" label="Title" variant="outlined" value={this.props.review.title} />
                </div>
                <div className="MenuRevDesc">
                    {this.props.review.map((p) => (
                        <TextField
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            multiline
                            variant="outlined"
                            rowsMax={4}
                            value={p.description}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <div className="MenuRevButtons">
                    <div className="CreatedOn">
                        created: {this.props.review.created_on}
                    </div>
                    <Button id="review-clear">Clear</Button>
                    <Button id="review-submit">Submit</Button>
                </div>
            </div>
        )
    }
}

export default MenuRev;