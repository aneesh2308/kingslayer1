import React from "react";

const ImageCard = (props) => {
  return (
    <>
      <img
        alt={props.alt}
        src={props.src}
        className="img-card responsive-image"
      />
    </>
  );
};

export default ImageCard;
