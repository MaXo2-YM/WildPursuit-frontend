import React, { Component } from "react";

export default class CheesePart extends Component {
  render() {
    return (
      <div
        style={{
          width: 20,
          height: 20,
          backgroundColor: "#235269",
          border: "1px solid #235269",
          borderRadius: "50%",
          position: "absolute",
          left: 20
        }}
      />
    );
  }
}
