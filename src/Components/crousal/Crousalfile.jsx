import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { img } from "./image/data"; // corrected import

import { Carousel } from "react-responsive-carousel";

const Crousalfile = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {img.map((imagelink, index) => (
        <img key={index} src={imagelink} />
      ))}
    </Carousel>
  );
};

export default Crousalfile;
