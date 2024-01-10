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
    <div className="flex items-center space-x-2">
      <select
        onChange={(e) => handleSelect(e.target.value)}
        className="text-slate-400 flex justify-center items-center px-4 h-8 m-4 border-2 rounded-full space-x-2 hover:transition duration-250 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
      >
        <option value="" disabled selected> + Filter by Site</option>
        {siteTitles.map(title => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
      {selectedSites.map(site => (
        //css classes don't work with dynamic classes. Troubleshoot for later.
        <div key={site} className="text-nowrap px-2 py-1 border-purple-600 text-purple-600 bg-purple-50 border-2 rounded-full cursor-pointer" onClick={() => handleRemove(site)}>{site}</div>
      ))}
    </div>
  );
};

export default FilterBySite;