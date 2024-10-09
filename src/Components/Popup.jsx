import React from "react";
import Button from "./Button";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-96 bg-pop p-5 shadow-md rounded-md relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          X
        </button>
        <div className="text-center">
          <h1 className="text-3xl">Want to know more?</h1>
          <p className="text-xs">
            Leave your contact info and we'll reach out shortly.
          </p>
        </div>
        <input className="w-full p-2 mt-2 rounded-lg" placeholder="Name*" />
        <input className="w-full p-2 mt-2 rounded-lg" placeholder="Mobile*" />
        <input className="w-full p-2 mt-2 rounded-lg" placeholder="Email*" />
        <Button
          name="Submit"
          bg="bg-red-600"
          text="text-white"
          w="w-full mt-4"
        />
      </div>
    </div>
  );
};

export default Popup;
