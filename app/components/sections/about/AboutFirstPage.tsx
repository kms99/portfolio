import React from 'react';
import Image from 'next/image';
import { Scope } from '@/public/assets/about';

type AboutFirstPageProps = {
  isActiveFirst: boolean;
  toggleClassFirst: () => void;
};

function AboutFirstPage({
  isActiveFirst,
  toggleClassFirst,
}: AboutFirstPageProps) {
  return (
    <div
      className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d transition-z duration-0 delay-500 cursor-pointer ${
        isActiveFirst ? '-z-30' : 'z-30'
      }  [&>div]:backface-hidden ${
        isActiveFirst ? 'animate-flip' : 'animate-flip-reverse'
      }`}
      onClick={toggleClassFirst}
    >
      <div className="top-0 left-0 w-full h-full absolute z-20 bg-black flex flex-col items-center">
        <Image
          src="/img/bg.jpg"
          width={1920}
          height={1280}
          alt="first"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-70 -z-10"
        />
        <h2 className="text-white mt-28 text-3xl font-bold mb-10">낭만 코더</h2>
        <span className="text-white font-bold text-sm animate-pulse">
          클릭하여 넘겨주세요
        </span>
      </div>

      <div className="top-0 left-0 w-full h-full  absolute flip z-10 bg-white border-r-2 flex flex-col items-center">
        <span className="mt-24 font-bold">첫번째 장</span>
        <h3 className="mt-16 text-3xl font-bold border-b-4 border-black mb-28">
          목표
        </h3>
        <Scope />
      </div>
    </div>
  );
}

export default AboutFirstPage;
