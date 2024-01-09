"use client"

import React, { useRef } from 'react';
import Arrow from './Arrow';

const ScrollableMenu: React.FC = ({ children }) => {
    const menuRef = useRef(null);
  
    const scroll = (direction) => {
      const childWidth = menuRef.current.firstChild.offsetWidth;
      menuRef.current.scrollLeft += childWidth * direction;
    };
  
    return (
      <div className="scrollable-menu flex items-center">
        <Arrow direction="left" onClick={() => scroll(-1)} />
        <ul ref={menuRef} className="menu flex overflow-x-auto scrollbar-hide">
          {children}
        </ul>
        <Arrow direction="right" onClick={() => scroll(1)} />
      </div>
    );
  };

export default ScrollableMenu;
