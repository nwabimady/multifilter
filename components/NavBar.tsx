"use client";

import React, { useContext } from "react";

import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  

  return (
    <div>
      <div className="m-4 text-2xl flex justify-between text-slate-400">
        <div>Games Global</div>
        <div>
          <FaBars className="cursor-pointer hover:text-purple-600 hover:transition duration-250 ease-in-out" />
        </div>
        <div className="text-base cursor-pointer hover:text-purple-600 hover:transition duration-250 ease-in-out">See All</div>
      </div>

      
    </div>
  );
};

export default NavBar;
