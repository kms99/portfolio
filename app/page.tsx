"use client";

import MainAbout from "./components/root/MainAbout";
import MainIntro from "./components/root/MainIntro";
import MainProject from "./components/root/MainProject";
import MainTech from "./components/root/MainTech";
import PageProvider from "./contexts/PageProvider";

const Home = () => {
  return (
    <div>
      <MainIntro />
      <PageProvider>
        <MainAbout />
      </PageProvider>
      <MainTech />
      <MainProject />
    </div>
  );
};

export default Home;
