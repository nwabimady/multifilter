"use client"

import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
  <div onClick={onClick} className={`arrow arrow-${direction} text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50`}>
    {direction === 'right' ? '>' : '<'}
  </div>
);

export default Arrow;

