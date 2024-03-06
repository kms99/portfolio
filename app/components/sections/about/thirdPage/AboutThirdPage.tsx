import React, { useEffect, useState } from 'react';

import { useBookContext } from '@/app/contexts/bookContext';
import ThirdPageFront from './ThirdPageFront';
import ThirdPageBack from './ThirdPageBack';

export default function AboutThirdPage() {
  const { currentPage } = useBookContext();

  const [isActive, setIsActive] = useState<boolean>(false);

  const [animateState, setAnimateState] = useState<string | null>(null);

  const handleCheckClick = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive) return;
    if (currentPage > 2) {
      setAnimateState('animate-flip');
    } else {
      setAnimateState('animate-flip-reverse');
    }
    setIsActive(false);
  }, [currentPage, isActive]);

  return (
    <div
      className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d transition-z duration-0 delay-500  cursor-pointer ${
        currentPage > 2 ? '-z-10' : 'z-10'
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
      <ThirdPageFront />
      <ThirdPageBack />
    </div>
  );
}
