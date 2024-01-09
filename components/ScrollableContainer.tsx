"use client"

import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ExtractDataBtn from './ExtractDataBtn';
import Button from './Button';
import FilterBySite from './FilterBySite';
import FilterByCategory from './FilterByCategory';

interface ScrollableContainerProps {
  setSite: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setExtractData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ setSite, setCategory, setExtractData }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollContainer = (direction) => {
    const container = document.getElementById('scroll-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    if (container) {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div id="scroll-container" className="flex overflow-x-scroll hide-scroll-bar">
      {scrollPosition > 0 && (
        <button onClick={() => scrollContainer('left')} className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          <HiOutlineArrowNarrowLeft className="cursor-pointer mr-1" />
        </button>
      )}
      <ExtractDataBtn setExtractData={setExtractData} />
      <Button setExtractData={setExtractData} />
      <FilterBySite setSite={setSite} />
      <FilterByCategory setCategory={setCategory} />
      <button onClick={() => scrollContainer('right')} className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
        <HiOutlineArrowNarrowRight className="cursor-pointer mr-1" />
      </button>
    </div>
  );
};

export default ScrollableContainer;