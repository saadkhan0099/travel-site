import React from "react";
import Island1 from "../assets/island1.jpg";
import Island2 from "../assets/island2.jpg";
import Island3 from "../assets/island3.jpg";
import Island4 from "../assets/Keywest.jpg";
import Island5 from "../assets/Maldives.jpg";
import { motion } from "framer-motion";

type Props = {};

const Destination = ({}: Props) => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4  ">
      <h1>All Inclusive Resorts</h1>
      <p className="py-4">On the Caribean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          src={Island1}
          alt=""
          className="w-full h-full object-cover rounded-md "
        />
        <img
          src={Island2}
          alt=""
          className="w-full h-full object-cover rounded-md "
        />
        <img
          src={Island3}
          alt=""
          className="w-full h-full object-cover rounded-md "
        />
        <img
          src={Island4}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
        <img
          src={Island5}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Destination;
