import React from "react";
import { GiAppleSeeds } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { FaBasketball } from "react-icons/fa6";
export const Icons = () => {
  return (
    <div>
      <h2>React Icons</h2>
      <GiAppleSeeds style={{ color: "red", fontSize: "50px", margin: "10px" }} />
      <FaArrowsDownToPeople style={{ color: "red", fontSize: "50px", margin: "10px" }} />
      <FaBasketball style={{ color: "blue", fontSize: "50px", margin: "10px" }} />
    </div>
  );
};
