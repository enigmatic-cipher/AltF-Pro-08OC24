import React, { useState } from "react";
import bannerImage from "../assets/banner.png";
import tick from "../assets/tick.png";
import Button from "./Button";
import Popup from "./Popup";

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section className="max-w-full flex font-title bg-banner pt-14 pb-14 space-x-10 justify-center">
        <div className="flex flex-col">
          <div className="leading-loose">
            <h1 className="font-bold text-3xl text-slate-700 pb-1">
              Experience a Forbes 500 office<pre>at simple prices.</pre>
            </h1>
            <h3 className="font-semibold text-lg text-slate-700 pb-2">
              AltF Coworking, Sector 142, Noida Expressway
            </h3>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">
                Value-based coworking space in Noida.
              </span>
            </div>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">Ideal for a 4-30 seats requirement.</span>
            </div>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">
                Our spaces attract top talent for your hiring.
              </span>
            </div>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">Made for Micro and Small Businesses.</span>
            </div>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">
                5 minutes walk from Sector-142 Metro Station.
              </span>
            </div>
            <div>
              <img className="py-2" src={tick} alt="tick" align="left" />
              <span className="mx-1">Proposed price Rs. 6,000/seat/month*</span>
            </div>
          </div>
          <div className="flex space-x-4 pt-16">
            <Button
              onClick={handleButtonClick}
              name="Enquire Now"
              bg="bg-red-600"
              text="text-white"
              w="w-40"
            />
            <Button
              onClick={handleButtonClick}
              name="New Floor Launched"
              bg="bg-red-100"
              text="text-red-700"
              w="w-60"
            />
          </div>
        </div>
        <div>
          <img className="rounded-lg" src={bannerImage} alt="banner image" />
        </div>
      </section>
      {isPopupOpen && <Popup onClose={closePopup} />}
    </>
  );
};

export default Banner;
