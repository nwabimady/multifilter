"use client"

import React from 'react';

interface SeeAllProps {
  setSite: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SeeAll: React.FC<SeeAllProps> = ({ setSite, setCategory }) => {
  const handleClick = () => {
    setSite([]);
    setCategory("");
  };

  return (
    <div onClick={handleClick}>SeeAll</div>
  );
};

export default SeeAll;

