"use client";

import React, { useState, Dispatch, SetStateAction } from 'react';
import data from './data.json';

interface FilterBySiteProps {
  setSite: Dispatch<SetStateAction<string[]>>;
}

const FilterBySite: React.FC<FilterBySiteProps> = ({ setSite }) => {
  const [selectedSites, setSelectedSites] = useState<string[]>([]);

  const siteTitles = [...new Set(data.data.oneClickAutomations.items.flatMap(item => item.sites.map(site => site.title)))];

  const handleSelect = (site: string) => {
    setSelectedSites(prevSites => [...prevSites, site]);
    setSite(prevSites => [...prevSites, site]);
  };

  const handleRemove = (site: string) => {
    setSelectedSites(prevSites => prevSites.filter(s => s !== site));
    setSite(prevSites => prevSites.filter(s => s !== site));
  };

  return (
    <div className="flex items-center space-x-2 overflow-x-auto">
      <div className="relative">
        <button className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50">
          + Filter by Site
        </button>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="" disabled selected></option>
          {siteTitles.map(title => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>
      {selectedSites.map(site => (
        <div key={site} className="px-2 py-1 text-slate-400 border-purple-600 text-purple-600 bg-purple-50 border-2 rounded-full cursor-pointer" onClick={() => handleRemove(site)}>{site}</div>
      ))}
    </div>
  );
};

export default FilterBySite;