import { BookMode } from '@/app/types/enums';
import React from 'react';
import { Career } from '@/public/assets/about';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function ThirdPageBack() {
  return (
    <AboutPageSideDiv
      mode={BookMode.PREV}
      $style="top-0 left-0 w-full h-full  absolute flip z-10 bg-white border-r-2 flex flex-col items-center bg-gray-200"
    >
      <span className="mt-24 font-bold">
        세번째 장
      </span>
      <h3 className="mt-16 text-3xl font-bold border-b-4 border-black mb-28">
        나의 경력
      </h3>
      <Career />
    </AboutPageSideDiv>
  );
}
