import React, { Component } from "react";
import { connect } from "react-redux";

class CheeseBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.cheeseObjet };
  }

  render() {
    const { coord, id, size, transform, onClick } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: coord[1],
          left: coord[0],
          width: size,
          height: size,
          backgroundColor: "#ffa64d",
          border: "1px solid #ffa64d",
          transform
        }}
        onClick={() => {
          onClick();
        }}
      >
        CheeseBox
      </div>
    );
  }
}
export default connect(() => ({}))(CheeseBox);
