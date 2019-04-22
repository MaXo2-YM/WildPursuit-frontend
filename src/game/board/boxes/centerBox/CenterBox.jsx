import React, { Component } from "react";
import Image from "./../../../../commun/images/logoLoup.png";

export default class CenterBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.centerObjet };
  }

  render() {
    const { coord, id, size, transform } = this.state;
    return (
      <div
        style={
          {
            position: "absolute",
            top: coord[1],
            left: coord[0],
            backgroundImage: `url(${Image})`, //backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/290px-Canis_lupus_265b.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            //border: "1px solid black",
            borderRadius: size,
            width: size,
            height: size,
            transform
          } //backgroundColor: "black",
        }
      >
        CenterBox
      </div>
    );
  }
}
