import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

type Props = {};

const Navbar = ({}: Props) => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between  items-center   h-20  px-4   absolute  z-10  text-gray-700">
      <div>
        <h1 className={logo ? "hidden" : "black"} onClick={handleNav}>
          Beaches.
        </h1>
      </div>
      <ul className="hidden md:flex ">
        <li className="hover:border-b  border-blue-800 ">Home</li>
        <li className="hover:scale-110">Destination</li>
        <li className="hover:scale-110 ">Travel</li>
        <li className="hover:scale-110 ">View</li>
        <li className=" hover:scale-110 ">Book</li>
      </ul>

      <div className="hidden md:flex space-x-2">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger  */}
      <div
        className="md:hidden z-10
        "
        onClick={handleNav}
      >
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobiler Menu dropDown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0  w-full  bg-gray-300/90 px-4 s py-7  flex flex-col  "
            : "absolute  left-[-100%]"
        }
      >
        <ul>
          <h1 className="">Beaches.</h1>
          <ul className="border-b">Home</ul>
          <ul className="border-b">Destinations</ul>
          <ul className="border-b">Travel</ul>
          <ul className="border-b">View</ul>
          <ul className="border-b">Book</ul>
        </ul>
        <div className="flex  flex-col ">
          <button className="my-6">Search</button>
          <button className="">Account</button>
        </div>
        <div className="flex  justify-between my-6 px-4 text-blue-7 ">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
