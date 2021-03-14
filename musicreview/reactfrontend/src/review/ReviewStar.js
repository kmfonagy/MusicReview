import React, { Component } from "react";
import Star from './Star';

class ReviewStar extends Component {
  static defaultProps = { max: 5 };
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
    console.log(this.state.value)
  }
  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  }

  handleMouseLeave(newValue) {
    this.setState({ dynamicValue: this.state.value });
  }

  render() {
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
    return <div>{starSpans}</div>;
  }
}

export default ReviewStar;
