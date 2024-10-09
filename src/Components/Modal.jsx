import React, { useState } from "react";
import Button from "./Button";

const Modal = () => {
  return (
    <>
      <div className="w-96 h-96 bg-pop grid place-items-center shadow-md rounded-md">
        <div className="text-center">
          <h1 className="text-3xl">Want to know more?</h1>
          <p className="text-xs">
            Leave your contact info and we'll reach out shortly.
          </p>
        </div>
        <input className="w-[80%] p-2 rounded-lg" placeholder="Name*" />
        <input className="w-[80%] p-2 rounded-lg" placeholder="Mobile*" />
        <input className="w-[80%] p-2 rounded-lg" placeholder="Email*" />
        <Button name="Submit" bg="bg-red-600" text="text-white" w="w-[80%]" />
      </div>
    </>
  );
};

export default Modal;
