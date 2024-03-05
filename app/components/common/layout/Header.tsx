'use client';

import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from './constants';
import HeaderNavItem from './HeaderNavItem';

export default function Header() {
  const [isTop, setIsTop] = useState<boolean>(true);

  const $topStyle = 'shadow-none';
  const $noTopStyle = 'shadow-headerShadow backdrop-blur-md';

  useEffect(() => {
    const checkScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', checkScroll);
  }, [isTop]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex justify-end items-center h-20 z-10 transition duration-500 pr-12 bg-headerColor ${
        isTop ? $topStyle : $noTopStyle
      }`}
    >
      <ul className="flex font-bold justify-end">
        {NAV_ITEMS.map(nav => (
          <HeaderNavItem key={nav.id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}
