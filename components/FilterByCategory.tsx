"use client"

import React, { useState, Dispatch, SetStateAction } from 'react';

interface FilterByCategoryProps {
  setCategory: Dispatch<SetStateAction<string>>;
}

const FilterByCategory: React.FC<FilterByCategoryProps> = ({ setCategory }) => {
  const [category, setCategoryState] = useState("");

  const categories = ["SEO", "Competitive Intelligence"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryState(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <select
      value={category}
      onChange={handleChange}
      className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    >
      <option value="" disabled selected>Filter by Category</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default FilterByCategory;
