"use client"

import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
  <div onClick={onClick} className={`arrow arrow-${direction} btn`}>
    {direction === 'right' ? '>' : '<'}
  </div>
);

export default Arrow;

