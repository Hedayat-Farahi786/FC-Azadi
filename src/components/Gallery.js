import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import imageOne from "./images/image-0.jpg";
import imageTwo from "./images/image-1.jpg";
import imageThree from "./images/image-2.jpg";
import imageFour from "./images/image-3.jpg";
import "./Gallery.css";
import { text } from "./lang/text";

const Gallery = ({lang, myRef}) => {
  return (
    <div ref={myRef} id="#gallery" className="gallery">
      <div className="gallery__top">
      <h1>{text['gallery'][lang]}</h1>
      <div className="gallery__line"></div>
      </div>

      <AwesomeSlider className="slider">
        <div data-src={imageOne} />
        <div data-src={imageTwo} />
        <div data-src={imageThree} />
        <div data-src={imageFour} />
      </AwesomeSlider>
    </div>
  );
};

export default Gallery;
