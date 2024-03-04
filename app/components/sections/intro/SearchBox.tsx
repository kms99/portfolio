import { Search } from '@/public/assets/intro';
import Link from 'next/link';
import React from 'react';
import { ONE_LINE_NAME } from './constants';

interface Props {
  checkViewPort: boolean;
}

export default function SearchBox({ checkViewPort }: Props) {
  return (
    <div className="border-black border-4 w-12em text-5xl py-6 px-4 relative">
      <h2
        className={`font-bold w-7em ${
          checkViewPort && 'animate-typing'
        } whitespace-nowrap overflow-hidden border-r border-black`}
      >
        {ONE_LINE_NAME}
      </h2>
      <Link className="absolute right-8 top-1/2 -translate-y-1/2" href="#about">
        <Search />
      </Link>
    </div>
  );
}
