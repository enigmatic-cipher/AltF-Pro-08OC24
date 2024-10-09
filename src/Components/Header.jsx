import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import call from "../assets/call.png";
import Button from "./Button";
import Popup from "./Popup";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section className="flex w-59.625 px-1 py-1 pt-4 pb-4 mt-1 mb-2 max-w-8xl align-middle justify-around font-title">
        <div>
          <img className="h-16 w-30" src={logo} alt="logo" />
        </div>
        <div className="flex space-x-7">
          <div>
            <span className="flex">
              <img className="h-4 w-4 mt-1 mx-2" src={call} alt="call-logo" />
              9958500568
            </span>
            <p className="text-sm">Sales Enquiries Only</p>
          </div>
          <div>
            <Button
              onClick={handleButtonClick}
              name="Request A CallBack"
              bg="bg-red-100"
              text="text-red-700"
              w="w-60"
            />
          </div>
        </div>
      </section>
      {isPopupOpen && <Popup onClose={closePopup} />}
    </>
  );
};

export default Header;
