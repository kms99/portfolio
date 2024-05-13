import { BookMode } from '@/app/_types/enums';
import Image from 'next/image';
import React from 'react';
import bookImg from '@/public/assets/about/bookImg.png';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function FirstPageFront() {
  return (
    <AboutPageSideDiv $style="top-0 left-0 w-full h-full absolute z-20 flex flex-col items-center" mode={BookMode.NEXT}>
      <div className="relative left-0 top-0 w-full h-full flex flex-col items-center">
        <Image
          src={bookImg}
          alt="first"
          className="absolute left-0 top-[2em] w-full h-full object-cover -z-10 laptop:top-0"
        />
        <div className="flex flex-col items-center w-full bg-zinc-400 pb-10">
          <h2 className="mt-28 text-[2em] mb-[1em] font-medium text-black">나를 소개합니다</h2>
          <span className="font-light text-[1em] text-black animate-pulse">클릭하여 넘겨주세요</span>
        </div>
      </div>
    </AboutPageSideDiv>
  );
}
