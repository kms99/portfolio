import React from 'react';
import Link from 'next/link';
import AboutInnerCard from '../AboutInnerCard';
import { MY_CAREER } from '../constants';
import { AboutCareerItem } from '../about.type';

export default function FourthPageFront() {
  const renderContext = (section: AboutCareerItem) => {
    return (
      <div>
        {section.contexts.map(context => (
          <section key={context.details}>
            <span>{context.duration}</span>
            {context.link ? (
              <Link href={context.link} target="_blank" rel="noopener noreferrer">
                {context.details}
              </Link>
            ) : (
              <span>{context.details}</span>
            )}
          </section>
        ))}
      </div>
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
      <div className=" flex flex-col justify-center px-6 bg-white rounded-lg w-full">{CARD_ITEMS}</div>
    </div>
  );
}
