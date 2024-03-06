import { BookMode } from '@/app/types/enums';
import Image from 'next/image';
import React from 'react';
import bookImg from '@/public/assets/about/bookImg.png';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function FirstPageFront() {
  return (
    <AboutPageSideDiv
      $style="top-0 left-0 w-full h-full absolute z-20 bg-black flex flex-col items-center"
      mode={BookMode.NEXT}
    >
      <Image
        src={bookImg}
        width={1920}
        height={1280}
        alt="first"
        className="absolute left-0 top-0 w-full h-full object-cover -z-10"
      />
      <h2 className="text-white mt-28 text-3xl font-bold mb-10">나를 소개합니다</h2>
      <span className="text-white font-bold text-sm animate-pulse">클릭하여 넘겨주세요</span>
    </AboutPageSideDiv>
  );
}
