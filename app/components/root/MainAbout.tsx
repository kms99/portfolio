import { usePage } from "@/app/contexts/PageProvider";
import SubTitle from "../common/SubTitle";
import AboutFirstPage from "./AboutFirstPage";
import AboutLastPage from "./AboutLastPage";
import AboutSecondPage from "./AboutSecondPage";

const MainAbout = () => {
  const { isActiveFirst, handleStartAnimating, handleEndAnimating } = usePage();

  return (
    <div
      id="about"
      className={`h-screen flex flex-col items-center relative `}
      onAnimationStart={handleStartAnimating}
      onAnimationEnd={handleEndAnimating}
    >
      <SubTitle>소개</SubTitle>
      <div
        className={`w-30rem h-40rem relative z-0 transition-all duration-1000 ease-in-out ${
          !isActiveFirst ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        {/* 표지 */}
        <AboutFirstPage />
        {/* 첫페이지 */}
        <AboutSecondPage />
        {/* 마지막 페이지 */}
        <AboutLastPage />
      </div>
    </div>
  );
};

export default MainAbout;
