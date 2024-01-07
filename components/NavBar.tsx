import React from "react";

import { FaBars } from "react-icons/fa6";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-slate-50">
      <div className="m-4 text-2xl flex justify-between text-slate-400">Games Global <FaBars /></div>
      <div className="flex justify-start">
        <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          <HiOutlineArrowsUpDown className="cursor-pointer mr-1" />
          Extract Data
        </button>
        <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          <MdOutlineMonitor className="cursor-pointer mr-1" />
          Monitoring
        </button>
        <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          <FaPlus className="cursor-pointer mr-1" />
          Filter by Site
        </button>
        <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          <FaPlus className="cursor-pointer mr-1" />
          Filter by Category
        </button>
      </div>
    </div>
  );
};

export default NavBar;
