import React, { Component } from "react";


export default class Logo extends Component {
  render() {
    return (
      <div id="logo">
        <img
          src={require("./../images/logoWP.png")}
          alt="Logo Wild Pursuit"
          width="150"
          height="110"
        />
      </div>
    );
  }
}

