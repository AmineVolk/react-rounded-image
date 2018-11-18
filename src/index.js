import React, { Component } from "react";
import styled from "styled-components";
export default class index extends Component {
  render() {
    const Div = styled.div`
      background: ${this.props.roundedColor};
      width: ${this.props.imageWidth}px;
      height: ${this.props.imageHeight}px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const Img = styled.img`
      width: ${this.props.imageWidth - this.props.roundedSize}px;
      height: ${this.props.imageHeight - this.props.roundedSize}px;
      border-radius: 50%;
    `;
    return (
      <Div>
        <Img alt="" src={this.props.image} />
      </Div>
    );
  }
}
index.defaultProps = {
  imageWidth: "200",
  imageHeight: "200",
  roundedSize: "20",
  roundedColor: "#1B3D50"
};
