import React from 'react';
import Image from 'next/image';
import { army, nbc, sangmyung } from '@/public/assets/about';
import { BookMode } from '@/app/_types/enums';
import AboutPageBack from '../AboutPageBack';
import PageNav from '../PageNav';

export default function ThirdPageBack() {
  return (
    <AboutPageBack countTitle="세번째장" title="나의 경력" detail="현재까지 경력을 알아봅니다.">
      <div className="mt-10 relative w-[50%] h-[40%] z-10">
        <Image src={sangmyung} alt="sangmyung" className=" absolute top-[2em] right-0 w-[15em]" />
        <Image src={army} alt="army" className="rotate-12 absolute top-[50%] left-0 w-[15em]" />
        <Image src={nbc} alt="nbc" className="-rotate-12 absolute bottom-0 right-0 w-[15em]" />
      </div>
      <span className="-rotate-45 absolute -right-20 bottom-20 text-[3em] text-gray-400">MY CAREER</span>

      <PageNav mode={BookMode.PREV} />
    </AboutPageBack>
  );
}
