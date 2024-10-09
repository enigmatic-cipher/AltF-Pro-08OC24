import React from "react";
import Gallery from "../Components/Gallery";
import Forms from "../Components/Forms";
import Map from "../Components/Map";
import Carousel from "../Components/Carousel";

const Section = () => {
  return (
    <>
      <div className="flex font-title space-x-40 justify-center">
        <Gallery />
        <Forms />
      </div>
      <Map />
      <Carousel />
    </>
  );
};

export default Section;
