"use client"

import React from 'react';

interface SeeAllProps {
  reset: () => void;
}

const SeeAll: React.FC<SeeAllProps> = ({ reset }) => {
  const handleClick = () => {
    reset();
  };

  return (
    <div onClick={handleClick}>See All</div>
  );
};

export default SeeAll;
