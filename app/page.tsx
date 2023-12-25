"use client";

import MainIntro from "./components/root/MainIntro";
import MainAbout from "./components/root/MainAbout";
import MainTech from "./components/root/MainTech";
import MainProject from "./components/root/MainProject";

const Home = () => {
  return (
    <div>
      <MainIntro />
      <MainAbout />
      <MainTech />
      <MainProject />
    </div>
  );
};

export default Home;
