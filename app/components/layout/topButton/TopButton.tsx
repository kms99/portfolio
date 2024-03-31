'use client';

import { isTopState } from '@/app/states/recoil/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';

export default function TopButton() {
  const isTop = useRecoilValue(isTopState);

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      type="button"
      className={`fixed bottom-[2rem] right-[2rem] ${isTop ? 'hidden' : 'block'}`}
      onClick={handleToTop}
    >
      up
    </button>
  );
}
