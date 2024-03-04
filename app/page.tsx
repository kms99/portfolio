'use client';

import MainIntro from './components/sections/intro/MainIntro';
import MainAbout from './components/sections/about/MainAbout';
import MainTech from './components/sections/tech/MainTech';
import MainProject from './components/sections/project/MainProject';

function Home() {
  return (
    <div>
      <MainIntro />
      <MainAbout />
      <MainTech />
      <MainProject />
    </div>
  );
}

export default Home;
