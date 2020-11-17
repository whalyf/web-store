import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './styles.css'

import img1 from '../assets/banner1.png'
import img2 from '../assets/banner2.png'
import img3 from '../assets/banner3.png'
 
const slideImages = [
    img1,
    img2,
    img3
];
 
const Slideshow = () => {
    return (
      <div className="slide-container dimensions">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow