import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img1 from "../Images/img.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";
// import Img4 from "../Images/img4.jpg"
const images = [
  Img1,
  Img2,
  Img3,
  //   'images/slide_3.jpg',
  //   'images/slide_4.jpg',
  //   'images/slide_5.jpg',
  //   'images/slide_6.jpg',
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.1}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", borderRadius: "10px" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
