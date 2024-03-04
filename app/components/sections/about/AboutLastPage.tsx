import React from "react";
import School from "@/public/img/school.svg";
import Name from "@/public/img/name.svg";
import Email from "@/public/img/email.svg";
import BootCamp from "@/public/img/bootcamp.svg";
import Military from "@/public/img/military.svg";
import AboutInfoCard from "./AboutInfoCard";

const sectionArray = [
  {
    title: "이름",
    titleIcon: <Name />,
    context: <span>김명섭</span>,
  },
  {
    title: "메일",
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

const AboutLastPage = () => {
  return (
    <div className="flex items-center top-0 left-0 w-full h-full absolute z-10 shadow-AboutCardShadow">
      <div className=" flex flex-col justify-center px-6 bg-white rounded-lg">
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
  );
};

export default AboutLastPage;
