"use client";

import React, { ReactNode, useState } from "react";
import NavBar from "./NavBar";

import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import FilterBySite from "./FilterBySite";
import Button from "./Button";
import FilterByCategory from "./FilterByCategory";
import Cards from "./Cards";
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  const [extractData, setExtractData] = useState(false);
  const [monitor, setMonitor] = useState(false);
  const [site, setSite] = useState("");
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
          <FilterBySite setSite={setSite} />
          <FilterByCategory setCategory={setCategory} />
        </ul>
      </div>
      <main>
        <Cards selectedSite={site} selectedCategory={category} />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

