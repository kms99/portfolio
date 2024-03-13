import { Search } from '@/public/assets/intro';
import React from 'react';
import { scrollToElement } from '@/app/utils/globalUtiles';
import { ONE_LINE_NAME } from './constants';

interface Props {
  checkViewPort: boolean;
}

export default function IntroSearchBox({ checkViewPort }: Props) {
  return (
    <div className="relative font-bold border-4 border-black searchBoxMobile tablet:searchBoxTablet desktop:searchBoxDesktop">
      <h2
        className={`w-7em whitespace-nowrap border-r border-black overflow-hidden ${checkViewPort && 'animate-typing'}`}
      >
        {ONE_LINE_NAME}
      </h2>
      <a
        onClick={e => scrollToElement(e, 'about')}
        className="absolute right-4 scale-50 tablet:scale-100 tablet:right-8  top-1/2 -translate-y-1/2"
        href="#about"
        aria-label="소개 섹션으로 이동"
      >
        <Search />
      </a>
    </div>
  );
}
