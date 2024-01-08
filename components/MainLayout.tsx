"use client";

import React, { useContext, useState } from "react";
import NavBar from "./NavBar";

import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";
import FilterBySite from "./FilterBySite";
import Button from "./Button";

const MainLayout = ({ children }) => {
  
  // State for filters
  const [extractData, setExtractData] = useState(false);
  const [monitor, setMonitor] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div className=" w-full min-h-screen">
      <NavBar />
      <div>
        <ul className="flex flex-wrap justify-start">
          <Button
            onClick={() => setExtractData(!extractData)}
            icon={<HiOutlineArrowsUpDown className="cursor-pointer mr-1" />}
          >
            Extract Data
          </Button>
          <Button
            onClick={() => setExtractData(!extractData)}
            icon={<MdOutlineMonitor className="cursor-pointer mr-1" />}
          >
            Monitoring
          </Button>

          <FilterBySite />

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
          >
            <option value="">Filter by Category</option>
            <option value="SEO">SEO</option>
            <option value="Competitive Intelligence">
              Competitive Intelligence
            </option>
            {/* Add more options as needed */}
          </select>
        </ul>
      </div>
      <main> {children} </main>
    </div>
  );
};

export default MainLayout;

