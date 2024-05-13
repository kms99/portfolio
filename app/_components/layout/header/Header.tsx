'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import Menu from '@/public/assets/header/menu.svg';
import { isTopState, projectModalState } from '@/app/_states/recoil/atoms';
import { NAV_ITEMS } from '../constants';
import HeaderNavItem from './HeaderNavItem';
import ProjectModal from '../../modal/projectModal/ProjectModal';

export default function Header() {
  const [isTop, setIsTop] = useRecoilState(isTopState);
  const isFirstMountCheckRef = useRef<boolean>(false);
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  const $topStyle = 'shadow-none';
  const $noTopStyle = 'shadow-headerShadow backdrop-blur-md';
  const [projectState] = useRecoilState(projectModalState);

  const handleMobileNavToggle = () => {
    setMobileNavVisible(prev => !prev);
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    // 첫 마운트 시에만 상태를 설정합니다.
    if (!isFirstMountCheckRef.current) {
      checkScroll(); // 초기 스크롤 위치를 확인합니다.
      isFirstMountCheckRef.current = true;
    }

    // 스크롤 이벤트 리스너를 추가합니다.
    window.addEventListener('scroll', checkScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [setIsTop]); // 종속성 배열을 비워서 컴포넌트가 마운트될 때만 실행되도록 합니다.

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex justify-end items-center h-[5rem] pr-[1rem] tablet:pr-[2rem] z-10 transition duration-500 bg-headerColor ${
        isTop ? $topStyle : $noTopStyle
      }`}
    >
      <button
        type="button"
        onClick={handleMobileNavToggle}
        className="block tablet:hidden"
        aria-label="모바일용 메뉴 버튼"
      >
        <Menu />
      </button>
      <ul className={`headerMobile tablet:headerDesktop ${mobileNavVisible ? 'h-[11rem]' : 'h-0'}`}>
        {NAV_ITEMS.map(nav => (
          <HeaderNavItem key={nav.id} nav={nav} handleMobileNavToggle={handleMobileNavToggle} />
        ))}
      </ul>

      {/* 프로젝트 모달 */}
      {projectState.isOpen && createPortal(<ProjectModal />, document.getElementById('modal-portal')!)}
    </header>
  );
}
