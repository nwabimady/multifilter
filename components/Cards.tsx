"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import data from './data.json';

function Cards() {
  const [items, setItems] = useState<{
    id: string;
    title: string;
    shortDescription: string;
    slug: string;
    priority: number;
    categories: { title: string; slug: string }[];
    sites: { logoSmall2x: string; domains: string[]; title: string; slug: string }[];
  }[]>([]);

  useEffect(() => {
    setItems(data.data.oneClickAutomations.items);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <div key={item.id} className="px-4 m-4 rounded-lg border-2">
            <div className='border-2 inline-block rounded-lg mt-2'>
              <Image src={item.sites[0].logoSmall2x} alt={item.sites[0].title} width={30} height={30} />
            </div>
            <div className='text-sm p-2 font-semibold antialiased'>{item.title}</div>
            <div className='text-xs p-2 mb-2'>{item.shortDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
