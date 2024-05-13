'use client';

import TopButton from '../_components/layout/topButton/TopButton';
import { AboutSection, IntroSection, ProjectSection, TechSection } from '../_components/sections';

export default function Home() {
  return (
    <>
      <TopButton />
      <IntroSection />
      <AboutSection />
      <TechSection />
      <ProjectSection />
    </>
  );
}
