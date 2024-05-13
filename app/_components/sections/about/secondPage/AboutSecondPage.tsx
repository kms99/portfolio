import React, { useEffect, useState } from 'react';
import useBook from '@/app/_hooks/useBook';
import SecondPageFront from './SecondPageFront';
import SecondPageBack from './SecondPageBack';

function AboutSecondPage() {
  const { page: currentPage } = useBook();

  const [isActive, setIsActive] = useState<boolean>(false);

  const [animateState, setAnimateState] = useState<string | null>(null);

  const handleCheckClick = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive) return;
    if (currentPage > 1) {
      setAnimateState('animate-flip');
    } else {
      setAnimateState('animate-flip-reverse');
    }
    setIsActive(false);
  }, [currentPage, isActive]);

  return (
    <div
      className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d transition-z duration-0 delay-500  cursor-pointer ${
        currentPage > 1 ? '-z-20' : 'z-20'
      } [&>div]:backface-hidden ${animateState}`}
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
      <SecondPageFront />
      <SecondPageBack />
    </div>
  );
}

export default AboutSecondPage;
