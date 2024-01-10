"use client"

import React, { useRef, useState, useEffect } from 'react';
import Arrow from './Arrow';

const ScrollableMenu: React.FC<{children?: React.ReactNode}> = ({ children }) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (menuRef.current) {
        const { scrollWidth, clientWidth } = menuRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children]); // Re-run the effect if children changes

  const scroll = (direction: number) => {
    if (menuRef.current && menuRef.current.firstChild) {
      const childWidth = (menuRef.current.firstChild as HTMLElement).offsetWidth;
      menuRef.current.scrollLeft += childWidth * direction;
    }
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

