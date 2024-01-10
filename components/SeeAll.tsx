"use client"

import React from 'react';
import FilterBySite from './FilterBySite';
import FilterByCategory from './FilterByCategory';

interface SeeAllProps {
  setSite: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
}

const SeeAll: React.FC<SeeAllProps> = ({ setSite, setCategory, reset }) => {
  const handleClick = () => {
    reset();
  };

  return (
    <div onClick={handleClick}>See All</div>
  );
};

export default SeeAll;


