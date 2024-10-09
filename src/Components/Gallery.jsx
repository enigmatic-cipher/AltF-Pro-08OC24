import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/img-5.png";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col font-title border-solid border-2 border-gray-300 p-5 rounded-md">
        <div className="mb-4 rounded-md overflow-hidden">
          <img src={img1} alt="waiting room image" />
        </div>
        <div className="flex mb-4">
          <div>
            <img src={img2} alt="kitchen room image" />
          </div>
          <div className="mx-4">
            <img src={img3} alt="play area" />
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={img4} alt="building image" />
          </div>
          <div className="mx-4">
            <img src={img5} alt="waiting room image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
