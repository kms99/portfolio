import React, { useEffect, useState } from 'react';
import useBook from '@/app/hooks/useBook';
import SubTitle from '../../common/SubTitle';
import AboutFirstPage from './firstPage/AboutFirstPage';
import AboutSecondPage from './secondPage/AboutSecondPage';
import AboutThirdPage from './thirdPage/AboutThirdPage';
import AboutFourthPage from './fourthPage/AboutFourthPage';

export default function AboutSection() {
  const { page: currentPage } = useBook();

  const [checkClick, setCheckClick] = useState<boolean>(false);

  useEffect(() => {
    if (checkClick) {
      setTimeout(() => setCheckClick(false), 1000);
    }
  }, [checkClick]);

  const handleCheckClick = () => {
    setCheckClick(true);
  };

  return (
    <div id="about" className={`mb-[10rem] h-auto flex flex-col items-center relative `}>
      <SubTitle>소개</SubTitle>
      <div
        className={`laptop:w-30rem laptop:h-40rem w-20rem h-30rem relative z-0 text-[0.8rem] laptop:text-[1.2rem] transition-all duration-1000 ease-in-out font-main ${
          currentPage ? 'translate-x-1/2' : 'translate-x-0'
        } ${checkClick && 'pointer-events-none'} `}
        onClick={handleCheckClick}
        role="button"
        aria-label="About page flip"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCheckClick();
          }
        }}
      >
        <AboutFirstPage />
        <AboutSecondPage />
        <AboutThirdPage />
        <AboutFourthPage />
      </div>
    </div>
  );
}
