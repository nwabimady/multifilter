"use client";

"use client";

import React from 'react';
import SeeAll from './SeeAll';

interface NavBarProps {
  setSite: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
}; 

const NavBar: React.FC<NavBarProps> = ({ setSite, setCategory, reset }) => {
  return (
    <div className='section'>
      <div className="title">
        <div>Games Global</div>
        <div className="see-all">
          <SeeAll setSite={setSite} setCategory={setCategory} reset={reset} />
        </div>
      </div>
      <p>Here are some Automations that are pre-defined for product availability monitoring.</p>
    </div>
  );
};

export default NavBar;