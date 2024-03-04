'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from './constants';

function Header() {
  const [isTop, setIsTop] = useState<boolean>(true);
  const topStyle = 'shadow-none';
  const noTopStyle = 'shadow-headerShadow backdrop-blur-md';

  useEffect(() => {
    const checkScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', checkScroll);
  }, [isTop]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-10 transition duration-500 flex items-center justify-end pr-12 bg-headerColor ${
        isTop ? topStyle : noTopStyle
      }`}
    >
      <ul className="flex font-bold justify-end [&>li>a]:p-3  [&>li:hover]:text-white [&>li+li]:ml-3 [&>li>a:hover]:bg-gray-700 [&>li>a]:w-full [&>li>a]:h-full">
        {NAV_ITEMS.map(nav => (
          <li id={nav.id}>
            <Link href={nav.id.split('-')[1]}>{nav.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
