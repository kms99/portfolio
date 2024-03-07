'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import { projectModalState } from '@/app/states/recoil/atoms';
import { NAV_ITEMS } from '../constants';
import HeaderNavItem from './HeaderNavItem';
import ProjectModal from '../../modal/projectModal/ProjectModal';

export default function Header() {
  const [isTop, setIsTop] = useState<boolean>(true);

  const $topStyle = 'shadow-none';
  const $noTopStyle = 'shadow-headerShadow backdrop-blur-md';
  const [projectState] = useRecoilState(projectModalState);

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
      {projectState.isOpen && createPortal(<ProjectModal />, document.getElementById('modal-portal')!)}

      <ul className="flex font-bold justify-end">
        {NAV_ITEMS.map(nav => (
          <HeaderNavItem key={nav.id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}
