import React from "react";
import tick from "../assets/tick.png";

const Map = () => {
  return (
    <div className="font-title w-[42.7%] border-solid border-2 border-gray-300 mt-28 mx-[14.5%] rounded-md mb-10">
      <div className="bg-banner">
        <h1 className="text-4xl p-3">AltF Coworking Sector 142</h1>
      </div>
      <div className="m-4">
        <div>
          <iframe
            className="h-96 w-[100%] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14025.291091084162!2d77.4142754!3d28.4999351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a8e05384bd%3A0x25763c0573c3a472!2sAltF%20Coworking%20Space%20in%20Noida%2C%20Sector%20142!5e0!3m2!1sen!2sin!4v1705041880433!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-7 leading-relaxed">
          <p>
            Situated on Noida Expressway, this fine and the most beautiful
            coworking space in Noida is the powerhouse of dynamic and
            collaborative working. This is the best place for an office space
            for rent in Noida which offers a flexible work culture with flexible
            seating plans and encourages growth and productivity. This high-end
            shared office space in Noida is refined and graceful, providing a
            superior value to small and medium teams ranging from 4-30 members,
            and adds to convenient working. The modern work ambiance and
            interaction among members allows networking and collaboration and
            opens the pathway to new opportunities. The nearby metro
            connectivity and E-rickshaw facility provides easy commuting for
            AltF Coworking’s members.
          </p>
          <div className="mt-7">
            <div>
              <img className="py-1" src={tick} alt="tick" align="left" />
              <span className="mx-1">32,000 sq.ft. of shared office space</span>
            </div>
            <div>
              <img className="py-1" src={tick} alt="tick" align="left" />
              <span className="mx-1">
                5 minutes’ walk from Sec-142 Metro Station
              </span>
            </div>
            <div>
              <img className="py-1" src={tick} alt="tick" align="left" />
              <span className="mx-1">E-rickshaw service for women</span>
            </div>
            <div>
              <img className="py-1" src={tick} alt="tick" align="left" />
              <span className="mx-1">
                Fully Furnished with modern interiors
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
