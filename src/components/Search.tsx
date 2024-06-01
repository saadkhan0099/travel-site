import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

type Props = {};

const Search = ({}: Props) => {
  return (
    <div className="max-w-[1240px] mx-auto  grid  lg:grid-cols-3 gap-4 px-4 py-16  ">
      <div className="lg:col-span-2 flex  flex-col justify-evenly">
        <div>
          <h2 className="uppercase text-blue-400 text-2xl font-bold">
            luxury included vocations for two peoples
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            earum iste quibusdam nostrum laudantium vitae assumenda soluta
            laboriosam repellat consequatur minus error nemo dicta dignissimos
            dolor modi recusandae, aspernatur, similique sunt aliquid quam ex.
            Libero recusandae dicta nemo ipsa amet doloremque, nesciunt
            reiciendis dolorum ratione repellat rem, perspiciatis culpa non,
            quia voluptatibus! Fugit tempora pariatur inventore quam, ratione
            consequatur recusandae maiores, hic ullam exercitationem magni
            molestias dolorem, facilis illo quia. Maxime quae odit iste dolorem
            expedita
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8  py-4  ">
          <div className="flex  flex-col lg:flex-row  items-center  text-center ">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2 font-bold  text-blue-500 tracking-[2px]">
                LEADING SERVICE
              </h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW{" "}
              </p>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row  items-center  text-center ">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2 font-bold  text-blue-500 tracking-[2px]">
                LEADING SERVICE
              </h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center  ">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 Hours Left</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex  flex-col my-2  ">
            <label> Destination</label>
            <select className=" border   rounded-md  p-2">
              <option>Pakistan</option>
              <option>Key west</option>
              <option>Maldives</option>
              <option>Fiji</option>
            </select>
          </div>
          <div className="flex  flex-col  my-2 ">
            <label>Check-In</label>
            <input className="border  rounded-md   p-2 " type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date" className="p-2  rounded-md   border" />
          </div>
          <button className="w-full my-4">Rates & Availibility</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
