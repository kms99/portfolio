'use client';

import TopButton from './components/layout/topButton/TopButton';
import { AboutSection, IntroSection, ProjectSection, TechSection } from './components/sections';

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
