import React from 'react';
import Image from 'next/image';
import { profile } from '@/public/assets/about';
import AboutPageBack from '../AboutPageBack';

export default function SecondPageBack() {
  return (
    <AboutPageBack countTitle="두번째장" title="나의 정보" detail="기본 정보 알아봅니다.">
      <Image
        src={profile}
        height={250}
        alt="user default"
        className="absolute left-1/2 bottom-28 -translate-x-1/2 rotate-3 shadow-ProfileImageShadow z-10"
      />
      <span className="-rotate-45 absolute -right-12 bottom-24 text-6xl text-gray-400">MY INFO</span>
    </AboutPageBack>
  );
}
