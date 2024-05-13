import React from 'react';
import { BookMode } from '@/app/_types/enums';
import AboutPageSideDiv from '../AboutPageSideDiv';
import PageNav from '../PageNav';

export default function SecondPageFront() {
  return (
    <AboutPageSideDiv
      mode={BookMode.NEXT}
      $style="flex flex-col justify-center whitespace-pre-wrap break-all top-0 left-0 w-full h-full absolute z-20 px-10 shadow-AboutCardShadow bg-white"
    >
      <h3 className="text-[2em] mb-8 inline-block w-fit font-bold">정진하는 개발자</h3>
      <p className="text-[1em] whitespace-pre-wrap tracking-wider leading-[2em] [&>span>span]:font-bold [&>span>span]:text-[1.2em] font-sub flex flex-col">
        <span className="mb-[20px]">
          웹 프론트엔드(FE) 개발자 <span>김명섭</span> 입니다.
        </span>
        <span>
          <span>지속적인 학습과 프로젝트</span> 를 통해 기술적역량을 강화하고 있으며, 배운 내용을
        </span>
        <span className="mb-[20px]">
          <span>기록하고 공유</span> 하고 있습니다.
        </span>
        <span>
          <span>주도적으로 목표를 설정</span> 하며,
        </span>
        <span>
          그 목표를 달성하기 위해 매일 <span>정진</span> 합니다.
        </span>
      </p>

      <PageNav mode={BookMode.NEXT} />
    </AboutPageSideDiv>
  );
}
