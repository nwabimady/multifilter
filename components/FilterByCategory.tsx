"use client"

import React, { useState, Dispatch, SetStateAction } from 'react';
import Select from './Select';

interface FilterByCategoryProps {
    setCategory: Dispatch<SetStateAction<string>>;
  }

  const FilterByCategory: React.FC<FilterByCategoryProps> = ({ setCategory }) => {
  const [category] = useState("");

  
  const categories = ["SEO", "Competitive Intelligence"];

  const options = categories.map(category => ({ value: category, label: category }));

  return (
    <Select
      options={[{ value: "", label: "Filter by Category", disabled: true }, ...options]}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    />
  );
};

export default FilterByCategory;
