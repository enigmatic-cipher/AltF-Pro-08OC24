import React from "react";
import Modal from "./Modal";

const Forms = () => {
  return (
    <>
      <div className="grid justify-items-center w-96 h-48 sticky top-3">
        <div className="flex flex-col font-title bg-pop rounded-md shadow-md">
          <div className="px-4">
            <div className="flex justify-between bg-white mt-5 mb-4 mx-5 rounded pt-1 pb-1 px-4">
              <div>Proposed Price</div>
              <div>₹6,000*/seat</div>
            </div>
            <p className="text-[70%] px-4">
              *The starting price shown excludes GST. Final prices may vary
              depending on occupancy, personalized services, and additional
              features.
            </p>
            <span className="text-[40%] float-end">*T&C Apply</span>
          </div>
        </div>
        <div className="mt-20">
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Forms;
