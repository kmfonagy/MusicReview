import React, { Component } from 'react';
import Heart from './Heart';

class ReviewHeart extends Component {
    static defaultProps = { max: 1 };
    constructor(props) {
        super(props);
        this.state = {
            dynamicValue: props.value,
            value: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(newValue) {
        this.setState({
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
    
        for (let v = 1; v <= max; v++) {
            heartSpans.push(
                <Heart
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
            return <div>{heartSpans}</div>;
        }
    }

export default ReviewHeart;