"use client"

import React, { useState, Dispatch, SetStateAction } from 'react';

import { FaPlus } from "react-icons/fa6";

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
      className="btn"
    > 
      <option value="" disabled selected> + Filter by Category </option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
    
  );
};

export default FilterByCategory;
