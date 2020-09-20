import React from "react";
import PropTypes from "prop-types";

class ReactRoundedImage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      roundedColor: props.roundedColor,
      hoverColor: props.hoverColor,
      isHover: false,
    };
  }

  render() {
    const {
      roundedColor,
      imageWidth,
      imageHeight,
      roundedSize,
      hoverColor,
      image,
    } = this.props;
    return (
      <div
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        style={{
          background: `${
            this.state.isHover && hoverColor != "" ? hoverColor : roundedColor
          }`,
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.5s ease",
        }}
      >
        <img
          style={{
            width: `${imageWidth - roundedSize}px`,
            height: `${imageHeight - roundedSize}px`,
            borderRadius: "50%",
          }}
          src={image}
        />
      </div>
    );
  }
}
ReactRoundedImage.propTypes = {
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  roundedSize: PropTypes.string.isRequired,
  roundedColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
ReactRoundedImage.defaultProps = {
  imageWidth: "200",
  imageHeight: "200",
  roundedSize: "20",
  roundedColor: "#1B3D50",
  hoverColor: "",
};
export default ReactRoundedImage;
