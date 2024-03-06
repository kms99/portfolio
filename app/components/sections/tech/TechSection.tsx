import React from 'react';
import SubTitle from '../../common/SubTitle';
import TechContainer from './TechContainer';
import { TechName } from './constants';

export default function TechSection() {
  return (
    <section className="h-screen flex flex-col items-center relative" id="tech">
      <SubTitle>기술스택</SubTitle>
      <div className="flex flex-col [&>section+section]:mt-5">
        {TechName.map(techTitle => (
          <TechContainer key={techTitle} title={techTitle} />
        ))}
      </div>
    </section>
  );
}
