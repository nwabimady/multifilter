"use cient"

import React, { useState } from 'react';
import { MdOutlineMonitor } from "react-icons/md";

const Button = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);

  const handleClick = () => {
    setIsMonitoring(!isMonitoring);
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 mr-1 ${isMonitoring ? 'flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 border-purple-600 text-purple-600 bg-purple-50 ' : 'text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2'}`}
    >
      <MdOutlineMonitor />
      Monitoring
    </button>
  );
};

export default Button;
