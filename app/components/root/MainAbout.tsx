import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import School from "@/public/img/school.svg";
import Name from "@/public/img/name.svg";
import Email from "@/public/img/email.svg";
import BootCamp from "@/public/img/bootcamp.svg";
import Military from "@/public/img/military.svg";
import Clip from "@/public/img/clip.svg";
import AboutInfoCard from "./AboutInfoCard";
import SubTitle from "../common/SubTitle";

const sectionArray = [
  {
    title: "이름",
    titleIcon: <Name />,
    context: <span>김명섭</span>,
  },
  {
    title: "Email",
    titleIcon: <Email />,
    context: <span>audtjq213@gmail.com</span>,
  },
  {
    title: "학력",
    titleIcon: <School />,
    context: (
      <p>
        <span>2017.03 ~ 2021.02</span>
        <span>상명대학교(천안) 정보통신공학과</span>
      </p>
    ),
  },
  {
    title: "군경력",
    titleIcon: <Military />,
    context: (
      <p>
        <span>2021.03 ~ 2023.06</span>
        <span>육군 정보통신병과 장교(중위) 전역</span>
      </p>
    ),
  },
  {
    title: "부트캠프",
    titleIcon: <BootCamp />,
    context: (
      <p>
        <span>2023.10 ~ 2024.02</span>
        <span>내일배움캠프 React 과정</span>
      </p>
    ),
  },
];

const MainAbout = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleClass = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div id="about" className={`h-screen flex flex-col items-center relative `}>
      <SubTitle>소개</SubTitle>

      <div
        className={`w-27rem h-38rem relative z-0 transition-all duration-1000 ${
          isActive ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        {/* 표지 */}
        <div
          className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d z-30 [&>div]:backface-hidden ${
            isActive ? "animate-flip" : "animate-flip-reverse"
          }`}
          onClick={toggleClass}
        >
          <div className="top-0 left-0 w-full h-full absolute z-20 bg-black flex flex-col items-center">
            <Image
              src={"/img/bg.jpg"}
              width={1920}
              height={1280}
              alt="first"
              className="absolute left-0 top-0 w-full h-full object-cover opacity-70 -z-10"
            />
            <h2 className="text-white mt-28 text-3xl font-bold mb-10">
              낭만 코더
            </h2>
            <span className="text-white font-bold text-sm animate-pulse">
              넘겨주세요
            </span>
          </div>

          <div className="top-0 left-0 w-full h-full  absolute flip z-10 bg-white border-r-2">
            <span>chater 1</span>
            <h3>나를 소개합니다</h3>
          </div>
        </div>

        {/* 첫페이지 */}
        <div className="flex items-center top-0 left-0 w-full h-full absolute z-20">
          <div className=" flex flex-col justify-center px-6 bg-white rounded-lg ">
            <Image
              src="/img/defaultUser2.jpg"
              width={250}
              height={250}
              alt="user default"
              className="absolute left-0 top-0 rotate-3 shadow-ProfileImageShadow"
            />
            {sectionArray.map((section, index) => {
              return (
                <AboutInfoCard
                  key={index}
                  title={section.title}
                  icon={section.titleIcon}
                >
                  {section.context}
                </AboutInfoCard>
              );
            })}
          </div>
        </div>

        <motion.section className="w-full h-full left-0 top-0 bg-white rounded-lg z-0 absolute">
          <h3 className=" text-3xl mt-8 mb-8 font-bold">{'"낭만"'}</h3>
          <p className=" w-30rem leading-7 text-lg whitespace-pre-wrap">
            {`안녕하십니까. 

웹 프론트엔드(FE) 개발자를 꿈꾸는 김명섭입니다.

천체망원경으로 별을 찾는 것은 정말 어렵지만 원하는 별을 망원경으로 보게될 때 뿌듯함과 낭만을 느끼게 됩니다.

저는 목표를 끊임없이 탐구하고 공부하며 결과를 통해 뿌듯함 얻을 수 있는 낭만있는 프로그래밍을 지향합니다.
          `}
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default MainAbout;
