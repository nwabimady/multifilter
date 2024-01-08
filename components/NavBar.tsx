"use client";

import React from 'react';
import SeeAll from './SeeAll';

interface NavBarProps {
  setSite: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setSite, setCategory }) => {
  return (
    <div>
      <div className="m-4 text-2xl flex justify-between text-slate-400">
        <div>Games Global</div>
        <div className="text-base cursor-pointer hover:text-purple-600 hover:transition duration-250 ease-in-out">
          <SeeAll setSite={setSite} setCategory={setCategory} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
