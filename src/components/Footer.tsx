import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px]  mx-auto  flex  flex-col px-4">
        <h1 className="py-6  text-center  ">BEACHES.</h1>
        <div className="sm:flex  text-center  justify-between">
          <div className="flex  justify-between w-full text-blue-700 ">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="py-8  flex flex-col justify-between">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Advertising</li>
          </ul>
          <ul className="flex flex-col justify-between py-6">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
