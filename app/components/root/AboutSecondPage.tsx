import Image from "next/image";
import React, { useState } from "react";
import Star from "@/public/img/star.svg";

const AboutSecondPage = () => {
  const [isActiveSecond, setIsActiveSecond] = useState<boolean>(false);

  const toggleClassSecond = () => {
    setIsActiveSecond(prev => !prev);
  };
  return (
    <div
      className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d transition-z duration-0 delay-500  cursor-pointer ${
        isActiveSecond ? "-z-20" : "z-20"
      } [&>div]:backface-hidden ${
        isActiveSecond ? "animate-flip" : "animate-flip-reverse"
      }`}
      onClick={toggleClassSecond}
    >
      <div className="flex flex-col justify-center whitespace-pre-wrap break-all top-0 left-0 w-full h-full absolute z-20 px-5 shadow-AboutCardShadow bg-white ">
        <figure className="absolute right-10 top-10 animate-pulse ">
          <Star />
        </figure>
        <h3 className=" text-3xl mt-8 mb-8 font-bold">{'"낭만"'}</h3>
        <p className="leading-7 text-lg whitespace-pre-wrap">
          {`안녕하십니까. 

웹 프론트엔드(FE) 개발자를 꿈꾸는 김명섭입니다.

천체망원경으로 별을 찾는 것은 정말 어렵지만 원하는 별을 망원경으로 보게될 때 뿌듯함과 낭만을 느끼게 됩니다.

저는 목표를 끊임없이 탐구하고 공부하며 결과를 통해 뿌듯함 얻을 수 있는 낭만있는 프로그래밍을 지향합니다.
  `}
        </p>
      </div>
      <div className="top-0 left-0 w-full h-full  absolute flip z-10 bg-white border-r-2 flex flex-col items-center">
        <span className="mt-24 font-bold">두번째 장</span>
        <h3 className="mt-16 text-3xl font-bold border-b-4 border-black">
          나를 소개합니다
        </h3>
        <Image
          src="/img/defaultUser2.jpg"
          width={250}
          height={250}
          alt="user default"
          className="absolute left-1/2 bottom-16 -translate-x-1/2 rotate-3 shadow-ProfileImageShadow"
        />
      </div>
    </div>
  );
};

export default AboutSecondPage;
