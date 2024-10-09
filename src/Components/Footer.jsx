import React from "react";
import logo from "../assets/footer-logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-900 text-white item place-items-center pt-5 pb-4 font-title">
        <div className="w-32 h-16">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex pb-4 pt-4 ">
          <div className="px-1">
            <a href="https://www.facebook.com/altfcoworking">
              <img className="h-5 w-2.5" src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="px-1">
            <a href="https://www.instagram.com/altf.coworking/">
              <img className="h-5 w-5" src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="px-1">
            <a href="https://www.linkedin.com/company/altf-coworking">
              <img className="h-5 w-5 pb-1" src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className="px-1">
            <a href="https://www.youtube.com/@altfcoworking">
              <img className="h-4 w-4 pt-1" src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <hr style={{ width: "15%" }} />
        <div className="flex mt-1 mb-1 pb-2 pt-2">
          <img className="h-4 w-4 mx-1" src={call} alt="call" />
          <span>99585 00568</span>
        </div>
        <hr style={{ width: "15%" }} />
        <div className="flex  mt-1 mb-1 pb-2 pt-2">
          <img className="h-5 w-5 mx-1" src={whatsapp} alt="whatsapp" />
          <span>99580 80053</span>
        </div>
        <hr style={{ width: "20%" }} />
        <div className="flex  mt-1 mb-1 pb-2 pt-2">
          <img className="h-4 w-4 mx-1" src={mail} alt="mail" />
          <span>connect@altfspaces.com</span>
        </div>
        <hr style={{ width: "60%" }} />
        <p className=" mt-1 mb-1 pb-2 pt-2">
          Copyright © AltF Coworking 2024. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
