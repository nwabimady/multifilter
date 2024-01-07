"use client";

import React, { useContext } from "react";

import { FaBars } from "react-icons/fa6";
import { MenuContext } from "@/context/MenuContext";

const NavBar = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div>
      <div className="m-4 text-2xl flex justify-between text-slate-400">
        <div>Games Global</div>
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer hover:text-purple-600" />
        </div>
      </div>

      
    </div>
  );
};

export default NavBar;
