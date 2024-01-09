"use client"

import React, { useRef, useState, useEffect } from 'react';
import Arrow from './Arrow';

const ScrollableMenu: React.FC = ({ children }) => {
  const menuRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const { scrollWidth, clientWidth } = menuRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children]); // Re-run the effect if children changes

  const scroll = (direction) => {
    const childWidth = menuRef.current.firstChild.offsetWidth;
    menuRef.current.scrollLeft += childWidth * direction;
  };

  return (
    <div className="scrollable-menu flex items-center">
      {isOverflowing && <Arrow direction="left" onClick={() => scroll(-1)} />}
      <ul ref={menuRef} className="menu flex overflow-x-auto scrollbar-hide">
        {children}
      </ul>
      {isOverflowing && <Arrow direction="right" onClick={() => scroll(1)} />}
    </div>
  );
};

export default ScrollableMenu;
