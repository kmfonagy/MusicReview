import React, { Component } from 'react';
import tempFavs from '../tempFavs.json';
import Heart from './Heart';

class ReviewHeart extends Component {
    static defaultProps = { max: 1 };
    constructor(props) {
        super(props);
        this.state = {
            dynamicValue: props.value,
            value: 0,
            UserID: 0
        };


        this.UserID = this.props.UserID;

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        for (let i = 0; i < tempFavs.favorites.length; i++) {
            if (
                tempFavs.favorites[i].UserID == this.UserID &&
                tempFavs.favorites[i].MusicID == this.props.album
            ) {
                this.setState(
                    {
                        value: 1,
                        dynamicValue: 1,
                        UserID: this.UserID
                    }
                )
            }
        }
    }

    handleClick(newValue) {
        this.setState({
            UserID: this.UserID,
            value: newValue,
            dynamicValue: newValue
        });
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