import { Search } from '@/public/assets/intro';
import React from 'react';
import { ONE_LINE_NAME } from './constants';

interface Props {
  checkViewPort: boolean;
}

export default function IntroSearchBox({ checkViewPort }: Props) {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="border-black border-4 w-12em text-5xl py-6 px-4 relative font-bold">
      <h2
        className={`font-bold w-7em ${
          checkViewPort && 'animate-typing'
        } whitespace-nowrap overflow-hidden border-r border-black`}
      >
        {ONE_LINE_NAME}
      </h2>
      <a
        onClick={e => scrollToElement(e, 'about')}
        className="absolute right-8 top-1/2 -translate-y-1/2"
        href="#about"
        aria-label="소개 섹션으로 이동"
      >
        <Search />
      </a>
    </div>
  );
}
