import React from 'react';
import Link from 'next/link';
import { LinkClip } from '@/public/assets/about';
import AboutInnerCard from '../AboutInnerCard';
import { MY_CAREER } from '../constants';
import { AboutCareerItem } from '../about.type';

export default function FourthPageFront() {
  const renderContext = (section: AboutCareerItem) => {
    return (
      <>
        {section.contexts.map(context => (
          <section key={context.details} className="flex flex-col">
            <span className="text-sm text-gray-500">{context.duration}</span>
            {context.link ? (
              <Link
                href={context.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-base tracking-tight border-b-1 border-transparent [&:hover]:border-black w-fit"
              >
                <LinkClip />
                {context.details}
              </Link>
            ) : (
              <span className="text-base">{context.details}</span>
            )}
          </section>
        ))}
      </>
    );
  };

  const CARD_ITEMS = MY_CAREER.map(section => {
    return (
      <AboutInnerCard key={section.title} title={section.title} icon={section.titleIcon}>
        {renderContext(section)}
      </AboutInnerCard>
    );
  });
  return (
    <div className="flex items-center top-0 left-0 w-full h-full absolute z-20  shadow-AboutCardShadow">
      <div className=" flex flex-col justify-center px-6 bg-white rounded-lg w-full gap-5">{CARD_ITEMS}</div>
    </div>
  );
}
