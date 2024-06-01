import React from "react";

type SelectsCardProps = {
  bg: string;
  text: string;
};

const SelectsCard = ({ bg, text }: SelectsCardProps) => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[300px]  object-cover" src={bg} alt="" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-xl text-gray-200 absolute font-bold">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectsCard;
