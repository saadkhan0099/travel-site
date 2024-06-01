import React from "react";
import Pic3 from "../assets/pic3.jpg";
import NorwayPic from "../assets/norway.jpg";
import Pic4 from "../assets/finland.jpg";
import Pic5 from "../assets/forest.jpg";
import Pic6 from "../assets/Croatia.jpg";
import SelectsCard from "./SelectsCard";

type Props = {};

const Selects = ({}: Props) => {
  return (
    <div className="max-w-[1240px] mx-auto  px-4 py-16  grid  sm:grid-cols-2  lg:grid-cols-3 gap-4">
      <SelectsCard bg={NorwayPic} text="Norway" />
      <SelectsCard bg={Pic4} text="Norway" />
      <SelectsCard bg={Pic5} text="Norway" />
      <SelectsCard bg={Pic6} text="Norway" />
      <SelectsCard bg={Pic3} text="Norway" />
      <SelectsCard bg={Pic6} text="Norway" />
    </div>
  );
};

export default Selects;
