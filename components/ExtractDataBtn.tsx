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
      className="btn"
    >
      <HiOutlineArrowsUpDown className="cursor-pointer mr-1" />
      Extract Data
    </button>
  );
};
//Exports undefined. Troubleshoot later.
export default ExtractDataBtn;