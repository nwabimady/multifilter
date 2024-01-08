"use client";

import React, { ReactNode, useState } from "react";
import NavBar from "./NavBar";

import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import FilterBySite from "./FilterBySite";
import Button from "./Button";
import FilterByCategory from "./FilterByCategory";
import Cards from "./Cards";
import ExtractDataBtn from "./ExtractDataBtn";
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
      <NavBar setSite={setSite} setCategory={setCategory} />
      <div>
        <ul className="flex flex-wrap justify-start">
          
          <ExtractDataBtn className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
                    ><HiOutlineArrowsUpDown className="cursor-pointer mr-1" />
            Extract Data
          </ExtractDataBtn>
          <Button
            onClick={() => setExtractData(!extractData)}
          > <MdOutlineMonitor className="cursor-pointer mr-1" />
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

