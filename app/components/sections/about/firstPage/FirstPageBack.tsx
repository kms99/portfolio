import { BookMode } from '@/app/types/enums';
import React from 'react';
import Image from 'next/image';
import profile from '@/public/assets/about/profileImg.jpg';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function FirstPageBack() {
  return (
    <AboutPageSideDiv
      $style="top-0 left-0 w-full h-full  absolute flip z-10 bg-white border-r-2 flex flex-col items-center bg-gray-200"
      mode={BookMode.PREV}
    >
      <span className="mt-24 font-bold">첫번째 장</span>
      <h3 className="mt-16 text-3xl font-bold border-b-4 border-black">어떤 개발자</h3>
      <Image
        src={profile}
        // width={250}
        height={250}
        alt="user default"
        className="absolute left-1/2 bottom-16 -translate-x-1/2 rotate-3 shadow-ProfileImageShadow"
      />
    </AboutPageSideDiv>
  );
}
