import React from "react";
import PropTypes from "prop-types";

const ReactRoundedImage = ({
  roundedColor,
  imageWidth,
  imageHeight,
  roundedSize,
  image,
}) => {
  return (
    <div
      style={{
        background: `${roundedColor}`,
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
};
ReactRoundedImage.propTypes = {
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  roundedSize: PropTypes.string.isRequired,
  roundedColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
ReactRoundedImage.defaultProps = {
  imageWidth: "200",
  imageHeight: "200",
  roundedSize: "20",
  roundedColor: "#1B3D50",
};
export default ReactRoundedImage;
