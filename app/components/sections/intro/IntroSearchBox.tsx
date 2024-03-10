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
    <div className="border-black border-4 desktop:w-12em tablet:w-10em w-7em text-5xl py-6 px-4 relative font-bold">
      <h2
        className={`font-bold w-7em desktop:text-5xl tablet:text-4xl text-3xl ${
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
