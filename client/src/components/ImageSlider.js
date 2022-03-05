import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./ImageSlider.css"
import imageOne from './images/image-0.jpg';
import imageTwo from './images/image-1.jpg';
import imageThree from './images/image-2.jpg';
import imageFour from './images/image-3.jpg';

const slideImages = [
  {
    url: imageOne,
    caption: 'Slide 1'
  },
  {
    url: imageTwo,
    caption: 'Slide 2'
  },
  {
    url: imageThree,
    caption: 'Slide 3'
  },
  {
    url: imageFour,
    caption: 'Slide 4'
  }
];

const ImageSlider = () => {
    return (
        <Slide arrows={false} duration={2000}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='slider' style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
    )
}

export default ImageSlider;