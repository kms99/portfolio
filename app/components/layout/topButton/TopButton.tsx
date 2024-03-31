'use client';

import { isTopState } from '@/app/states/recoil/atoms';
import { Down } from '@/public/assets/intro';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export default function TopButton() {
  const isTop = useRecoilValue(isTopState);

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.log(isTop);
  }, [isTop]);

  return (
    <button
      type="button"
      className={`fixed bottom-[2rem] right-[2rem] cursor-pointer z-50 ${isTop ? 'hidden' : 'block'}`}
      onClick={handleToTop}
      aria-label="goToTop"
    >
      <Down className="rotate-180" />
    </button>
  );
}
