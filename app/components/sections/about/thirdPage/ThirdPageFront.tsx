import React from 'react';
import Link from 'next/link';
import { BookMode } from '@/app/types/enums';
import { AboutInfoItem } from '../about.type';
import { MY_INFO } from '../constants';
import AboutInnerCard from '../AboutInnerCard';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function ThirdPageFront() {
  const renderContext = (
    section: AboutInfoItem,
  ) => {
    if (section.link) {
      return (
        <Link
          href={section.contexts}
          target="_blank"
          rel="noopener noreferrer"
        >
          {section.contexts}
        </Link>
      );
    }

    return <span>{section.contexts}</span>;
  };

  const CARD_ITEMS = MY_INFO.map(section => {
    return (
      <AboutInnerCard
        key={section.title}
        title={section.title}
        icon={section.titleIcon}
      >
        {renderContext(section)}
      </AboutInnerCard>
    );
  });
  return (
    <AboutPageSideDiv
      mode={BookMode.NEXT}
      $style="flex items-center top-0 left-0 w-full h-full absolute z-20 shadow-AboutCardShadow bg-white"
    >
      <div className=" flex flex-col justify-center px-6 bg-white rounded-lg w-full">
        {CARD_ITEMS}
      </div>
    </AboutPageSideDiv>
  );
}