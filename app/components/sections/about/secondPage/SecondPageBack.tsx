import React from 'react';
import Image from 'next/image';
import { profile } from '@/public/assets/about';
import { BookMode } from '@/app/types/enums';
import AboutPageBack from '../AboutPageBack';
import PageNav from '../PageNav';

export default function SecondPageBack() {
  return (
    <AboutPageBack countTitle="두번째장" title="나의 정보" detail="기본 정보 알아봅니다.">
      <Image
        src={profile}
        alt="user default"
        className="absolute left-1/2 bottom-16 -translate-x-1/2 rotate-3 shadow-ProfileImageShadow z-10 h-[15em] w-auto"
      />
      <span className="-rotate-45 absolute -right-12 bottom-20 text-[3em] text-gray-400">MY INFO</span>

      <PageNav mode={BookMode.PREV} />
    </AboutPageBack>
  );
}
