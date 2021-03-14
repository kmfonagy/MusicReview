import React, { Component } from "react";
import Starred from "./Starred";

class ReviewedStar extends Component {
  static defaultProps = { max: 5 };
  constructor(props) {
    super(props);
    this.state = {
      dynamicValue: props.value,
      value: 0
    };
  }

  render() {
    const { dynamicValue } = this.state;
    const starSpans = [];
    const max = this.props.max;

    for (let v = 1; v <= max; v++) {
      starSpans.push(
        <Starred
          key={v}
          color={"#cccccc"}
          isFilled={v <= dynamicValue}
          value={v}
          action={this.props.action}
        />
      );
    }
    return <div>{starSpans}</div>;
  }
}

export default ReviewedStar;
