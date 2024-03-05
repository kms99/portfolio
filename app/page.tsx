'use client';

import {
  AboutSection,
  IntroSection,
  ProjectSection,
  TechSection,
} from './components/sections';
import BookProvider from './contexts/bookContext';

export default function Home() {
  return (
    <>
      <IntroSection />
      <BookProvider>
        <AboutSection />
      </BookProvider>
      <TechSection />
      <ProjectSection />
    </>
  );
}
