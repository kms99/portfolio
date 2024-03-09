import React from 'react';
import Image from 'next/image';
import { army, nbc, sangmyung } from '@/public/assets/about';
import { BookMode } from '@/app/types/enums';
import AboutPageBack from '../AboutPageBack';
import PageNav from '../PageNav';

export default function ThirdPageBack() {
  return (
    <AboutPageBack countTitle="세번째장" title="나의 경력" detail="현재까지 경력을 알아봅니다.">
      <div className="mt-10 relative w-1/2 h-1/4">
        <Image src={sangmyung} alt="sangmyung" width={150} className=" absolute top-8 right-0" />
        <Image src={army} alt="army" width={150} className="rotate-12 absolute top-1/2 left-0" />
        <Image src={nbc} alt="nbc" width={150} className="-rotate-12 absolute bottom-0 right-0" />
      </div>
      <span className="-rotate-45 absolute -right-20 bottom-20 text-6xl text-gray-400">MY CAREER</span>

      <PageNav mode={BookMode.PREV} />
    </AboutPageBack>
  );
}
