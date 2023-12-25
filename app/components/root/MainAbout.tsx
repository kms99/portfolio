import React, { useState } from "react";
import SubTitle from "../common/SubTitle";
import AboutFirstPage from "./AboutFirstPage";
import AboutSecondPage from "./AboutSecondPage";
import AboutLastPage from "./AboutLastPage";

const MainAbout = () => {
  const [isActiveFirst, setIsActiveFirst] = useState<boolean>(false);
  const toggleClassFirst = () => {
    setIsActiveFirst(prev => !prev);
  };

  return (
    <div id="about" className={`h-screen flex flex-col items-center relative `}>
      <SubTitle>소개</SubTitle>
      <div
        className={`w-30rem h-40rem relative z-0 transition-all duration-1000 ease-in-out ${
          isActiveFirst ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        {/* 표지 */}
        <AboutFirstPage
          isActiveFirst={isActiveFirst}
          toggleClassFirst={toggleClassFirst}
        />
        {/* 첫페이지 */}
        <AboutSecondPage />
        {/* 마지막 페이지 */}
        <AboutLastPage />
      </div>
    </div>
  );
};

export default MainAbout;
