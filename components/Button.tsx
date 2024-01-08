"use cient"

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, icon }) => {
  return (
    <button
      onClick={onClick}
      className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    >
      {icon && <span className="cursor-pointer mr-1">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
