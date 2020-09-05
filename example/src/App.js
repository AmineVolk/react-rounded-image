import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/me.jpg";

export default class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ReactRoundedImage image={MyPhoto} />
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
        />

        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#66A5CC"
          imageWidth="120"
          imageHeight="120"
          roundedSize="8"
        />

        <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="110"
          imageHeight="110"
        />
      </div>
    );
  }
}
