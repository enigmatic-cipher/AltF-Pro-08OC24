import React from "react";
import cup from "../assets/cup.png";
import print from "../assets/print.png";
import wifi from "../assets/wifi.png";
import tool from "../assets/tool.png";
import housekeeping from "../assets/housekeeping.png";
import power from "../assets/power.png";

const Amenities = () => {
  return (
    <>
      <div className="flex space-x-20 font-title justify-center items-center pt-14 pb-14">
        <div className="grid place-items-center">
          <img src={cup} alt="cup" />
          <p>Complimentary Tea & Coffee</p>
        </div>
        <div className="grid place-items-center">
          <img src={print} alt="print" />
          Break-out Area
        </div>
        <div className="grid place-items-center">
          <img src={wifi} alt="wifi" />
          High-Speed Wi-fi
        </div>
        <div className="grid place-items-center">
          <img src={tool} alt="tool" />
          Electricity & Maintenance
        </div>
        <div className="grid place-items-center">
          <img src={housekeeping} alt="housekeeping" />
          Housekeeping
        </div>
        <div className="grid place-items-center">
          <img src={power} alt="power" />
          24*7 Power Backup
        </div>
      </div>
    </>
  );
};

export default Amenities;
