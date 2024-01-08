"use client"

import React from 'react';

interface SelectProps {
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  value?: string;
}

const Select: React.FC<SelectProps> = ({ onChange, options, value }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
