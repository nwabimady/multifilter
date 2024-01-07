"use client";

import React, { useContext } from "react";
import NavBar from "./NavBar";

import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className=" w-full min-h-screen">
      <NavBar />
      <div className={`overflow-hidden transition-all duration-100 ${open ? "w-500 p-4" : "w-0"}`}>
        {/* <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"> */}
        <ul className="flex justify-start flex-wrap">
          <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
            <HiOutlineArrowsUpDown className="cursor-pointer mr-1 " />
            Extract Data
          </button>
          <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
            <MdOutlineMonitor className="cursor-pointer mr-1" />
            Monitoring
          </button>
          <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
            <FaPlus className="cursor-pointer mr-1" />
            Filter by Site
          </button>
          <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
            <FaPlus className="cursor-pointer mr-1" />
            Filter by Category
          </button>
         
        </ul>
      </div>
      <hr />
      <main> {children} </main>
    </div>
  );
};

export default MainLayout;
