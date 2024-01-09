"use client"

import React, { useState } from 'react';
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

interface ExtractDataBtnProps {
  data: any[];
}

const ExtractDataBtn: React.FC<ExtractDataBtnProps> = ({ data }) => {
  const [extractData, setExtractData] = useState(false);

  const handleClick = () => {
    setExtractData(!extractData);
    if (!extractData) {
      const dataStr = JSON.stringify(data, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

      let exportFileDefaultName = 'data.json';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-nowrap text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    >
      <HiOutlineArrowsUpDown className="cursor-pointer mr-1" />
      Extract Data
    </button>
  );
};

export default ExtractDataBtn;