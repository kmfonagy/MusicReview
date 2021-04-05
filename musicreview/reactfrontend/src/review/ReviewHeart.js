import React, { Component } from 'react';
import Heart from './Heart';

const addFavoritePost = async values => {
    const url = '/api/newFavorite'
    const resp = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userID: values.userID,
            musicID: values.musicID
        })
    })
    return resp.json();
}

class ReviewHeart extends Component {
    static defaultProps = { max: 1 };
    constructor(props) {
        super(props);
        this.state = {
            dynamicValue: props.value,
            value: 0,
            userID: localStorage.getItem("userID"),
            musicID: localStorage.getItem('albumID'),
            favID: 0,
            faved: false
        };

        console.log("ReviewHeart MusicID " + this.state.musicID)
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        Promise.all([
            fetch('/api/getFavoriteByUserId/' + this.state.userID).then(res => res.json())
        ]).then(([favs]) => {
            for (let i = 0; i < favs.length; i++) {
                if (this.state.musicID == favs[i].musicID) {
                    this.setState(
                        {
                            value: 1,
                            dynamicValue: 1,
                            favID: favs[i].id,
                            faved: true
                        }
                    )
                    console.log("Favorite found: FavID = " + this.state.favID, ", Value = " + this.state.value, ", DynamicValue = " + this.state.dynamicValue, ", Faved = " + this.state.faved)
                }
            }
        }).catch((error) => {
            console.log(error);
        });
        
    }

    async handleClick(newValue) {
        if(this.state.faved){
            this.setState({
                value: newValue,
                dynamicValue: newValue,
                faved: false
            });
            fetch('/api/deleteFavorite/' + this.state.favID, { method: 'DELETE' })
                .then(() => console.log('Delete successful: Value = ' + this.state.value, ', DynamicValue = ' + this.state.dynamicValue, ', Faved = ' + this.state.faved));
        } else {
            this.setState({
                value: newValue,
                dynamicValue: newValue,
                faved: true
            });
            await addFavoritePost(this.state);
            Promise.all([
                fetch('/api/getFavoriteByUserId/' + this.state.userID).then(res => res.json())
            ]).then(([favs]) => {
                for (let i = 0; i < favs.length; i++) {
                    if (this.state.musicID === favs[i].musicID) {
                        this.setState(
                            {
                                favID: favs[i].id,
                                faved: true
                            }
                        )
                        console.log("New Favorite created: FavID = " + this.state.favID, ", Value = " + this.state.value, ", DynamicValue = " + this.state.dynamicValue, ", Faved = " + this.state.faved)
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    handleMouseEnter(newValue) {
        this.setState({ dynamicValue: newValue });
    }

    handleMouseLeave(newValue) {
        this.setState({ dynamicValue: this.state.value });
    }

    render() {
        const { dynamicValue } = this.state;
        const heartSpans = [];
        const max = this.props.max;


        {
            this.state.value == 0 ?
            heartSpans.push(
                <Heart
                    key={1}
                    color={"#4E6891"}
                    isFilled={1 <= dynamicValue}
                    value={1}
                    handleHover={this.handleMouseEnter}
                    handleHoverLeave={this.handleMouseLeave}
                    handleClick={this.handleClick}
                />
            ) :
            heartSpans.push(
                <Heart
                    key={1}
                    color={"#4E6891"}
                    isFilled={1 <= dynamicValue}
                    value={0}
                    handleHover={this.handleMouseEnter}
                    handleHoverLeave={this.handleMouseLeave}
                    handleClick={this.handleClick}
                />
            )
        }


        return <div>{heartSpans}</div>;
    }
}

export default ReviewHeart;