import React, { useEffect, useState } from "react";
import Popup from "./Popup";

const Button = (props) => {
  console.log(props.onClick);
  return (
    <>
      <button
        className={`${props.bg}  h-11 ${props.w} rounded-md ${props.text} justify-center items-center font-title shadow-lg`}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
