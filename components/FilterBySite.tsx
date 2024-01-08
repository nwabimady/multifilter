"use client";

import React, { useState, useEffect } from 'react';
import Select from './Select';
import data from './data.json'; // adjust the path to your JSON file as needed

const FilterBySite: React.FC = () => {
  const [site, setSite] = useState("");

  // Extract unique site titles from the JSON data
  const siteTitles = [...new Set(data.data.oneClickAutomations.items.flatMap(item => item.sites.map(site => site.title)))];

  // Convert site titles to the format expected by the Select component
  const options = siteTitles.map(title => ({ value: title, label: title }));

  return (
    <Select
      options={[{ value: "", label: "Filter by Site", disabled: true }, ...options]}
      value={site}
      onChange={(e) => setSite(e.target.value)}
      className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
    />
  );
};

export default FilterBySite;