'use client';

import OpenGraph from './OpenGraph';
import { AboutSection, IntroSection, ProjectSection, TechSection } from './components/sections';
import BookProvider from './contexts/bookContext';

export default function Home() {
  return (
    <>
      <OpenGraph />
      <IntroSection />
      <BookProvider>
        <AboutSection />
      </BookProvider>
      <TechSection />
      <ProjectSection />
    </>
  );
}
