import React from 'react';
import Image from 'next/image';
import { developer } from '@/public/assets/about';
import AboutPageBack from '../AboutPageBack';

export default function FirstPageBack() {
  return (
    <AboutPageBack countTitle="첫번째장" title="어떤 개발자" detail="개발자로서 추구하는 방향성을 이야기합니다.">
      <Image
        src={developer}
        width={250}
        alt="user default"
        className="absolute left-1/2 bottom-44 -translate-x-1/2 shadow-ProfileImageShadow z-10"
      />
      <span className="-rotate-45 absolute -right-20 bottom-20 text-6xl whitespace-nowrap text-gray-400">
        DEVELOPER
      </span>
    </AboutPageBack>
  );
}
