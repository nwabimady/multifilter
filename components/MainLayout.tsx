"use client";

import React, { useContext, useState } from "react";
import NavBar from "./NavBar";

import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";
import FilterBySite from "./FilterBySite";
import Button from "./Button";
import FilterByCategory from "./FilterByCategory";

const MainLayout = ({ children }) => {
  
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

          <FilterByCategory />
        </ul>
      </div>
      <main> {children} </main>
    </div>
  );
};

export default MainLayout;

