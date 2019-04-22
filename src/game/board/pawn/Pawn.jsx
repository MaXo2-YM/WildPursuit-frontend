import React, { Component } from "react";
import CheesePart from "./cheesePart/CheesePart.jsx";

export default class Pawn extends Component {
  render() {
    return (
      <div
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#5D5D5D",
          border: "1px solid #5D5D5D",
          borderRadius: "50%",
          position: "relative",
          top: 250,
          left: 250
        }}
      >
        <CheesePart />
      </div>
    );
  }
}
