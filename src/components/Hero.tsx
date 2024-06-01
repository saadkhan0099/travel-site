import React from "react";
import Beaches from "../assets/Beaches.jpg";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full  object-cover" src={Beaches} alt="" />
      <div className="absolute  w-full h-full  top-0 left-0  bg-gray-900/20"></div>
      <div className="absolute   top-0 w-full h-full flex  flex-col justify-center text-center  text-white  p-4 ">
        <h1>First Class Travel</h1>
        <h2 className=" text-2xl py-3 ">Top 1% Locations WorldWide</h2>
        <form className="flex  justify-between items-center max-w-[700px] mx-auto  w-full border p-1 rounded-md text-gray-800 bg-gray-100/50">
          <div>
            <input
              type="text"
              placeholder="Search Destination"
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon " size={30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
